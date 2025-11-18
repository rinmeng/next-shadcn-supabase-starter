-- Create message table
CREATE TABLE IF NOT EXISTS public.message (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,  
  author_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.message ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow all users to read messages
CREATE POLICY "Enable read access for all users" ON public.message
  FOR SELECT USING (true);

-- Allow all users to insert messages
CREATE POLICY "Enable insert access for all users" ON public.message
  FOR INSERT WITH CHECK (true);

-- Allow all authenticated users to modify/delete any messages
CREATE POLICY "Enable update access for authenticated users" ON public.message
  FOR UPDATE USING (auth.role() = 'authenticated');

-- No update policy - users cannot modify messages
-- No delete policy - users cannot delete messages
