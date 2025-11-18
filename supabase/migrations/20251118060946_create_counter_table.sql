-- Create counter table
CREATE TABLE IF NOT EXISTS public.counter (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.counter ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all for now - adjust based on your needs)
CREATE POLICY "Enable read access for all users" ON public.counter
  FOR SELECT USING (true);

CREATE POLICY "Enable insert access for all users" ON public.counter
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update access for all users" ON public.counter
  FOR UPDATE USING (true);

-- Create function to automatically update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER on_counter_updated
  BEFORE UPDATE ON public.counter
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
