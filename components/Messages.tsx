'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import {
  Avatar,
  AvatarFallback,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  ScrollArea,
} from '@/components/ui';
import { Send } from 'lucide-react';
import { getDelayClass } from '@/utils/animations';

interface Message {
  id: string;
  content: string;
  author_name: string;
  created_at: string;
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('message')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }

    if (data) {
      setMessages(data);
    }
  };

  const handleSend = async () => {
    if (!name.trim() || !message.trim()) {
      return;
    }

    setIsLoading(true);

    const { error } = await supabase
      .from('message')
      .insert([{ author_name: name.trim(), content: message.trim() }]);

    if (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
      return;
    }

    setMessage('');
    await fetchMessages(); // Refetch after sending
    setIsLoading(false);
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 1).toUpperCase();
  };

  const getTimeAgo = (timestamp: string) => {
    const now = new Date();
    const created = new Date(timestamp);
    const diffInMs = now.getTime() - created.getTime();
    const diffInMins = Math.floor(diffInMs / 60000);

    if (diffInMins < 1) return 'just now';
    if (diffInMins === 1) return '1 min ago';
    if (diffInMins < 60) return `${diffInMins} mins ago`;

    const diffInHours = Math.floor(diffInMins / 60);
    if (diffInHours === 1) return '1 hour ago';
    if (diffInHours < 24) return `${diffInHours} hours ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  useEffect(() => {
    // Fetch messages on initial load
    (async () => {
      await fetchMessages();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='mx-auto max-w-2xl'>
      <Card>
        <CardHeader>
          <CardTitle>See what others are saying!</CardTitle>
          <CardDescription>
            A simple demo showing how users can send and view messages using a database
            connection. You can modify these messages in the protected admin panel by
            logging in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='mb-2'>
            <div className='flex gap-4 flex-col sm:flex-row'>
              <Input
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full sm:w-2/6'
                disabled={isLoading}
              />
              <div className='flex w-full gap-2 flex-col sm:flex-row'>
                <Input
                  placeholder='Your message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !name.trim() || !message.trim()}
                  size='icon'
                  className='w-full sm:w-10'
                >
                  <Send className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>

          <ScrollArea className='h-[200px] pr-4'>
            <div className='space-y-2 pt-6'>
              {messages.map((msg, idx) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 border rounded-xl p-2 fade-in-from-top
                  ${getDelayClass(idx)}`}
                >
                  <div className='flex items-center justify-center'>
                    <Avatar>
                      <AvatarFallback>{getInitials(msg.author_name)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex items-center gap-2 mb-1'>
                      <span className='font-semibold'>{msg.author_name}</span>
                      <p className='text-sm text-muted-foreground'>{msg.content}</p>
                    </div>
                    <span className='text-xs text-muted-foreground'>
                      {getTimeAgo(msg.created_at)}
                    </span>
                  </div>
                </div>
              ))}

              {messages.length === 0 && (
                <div className='text-center text-muted-foreground py-8'>
                  No messages yet. Be the first to leave one!
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
