-- Run this in Supabase SQL Editor

-- Announcements (Gabby posts)
CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  posted_by TEXT DEFAULT 'Gabby',
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can read announcements" ON announcements
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Only admins insert/delete — enforced at app level via is_admin check
CREATE POLICY "Anyone authenticated can insert announcements" ON announcements
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Anyone authenticated can delete announcements" ON announcements
  FOR DELETE USING (auth.uid() IS NOT NULL);


-- Announcement comments (members comment, Gabby replies)
CREATE TABLE IF NOT EXISTS announcement_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  announcement_id UUID REFERENCES announcements(id) ON DELETE CASCADE,
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  is_gabby_reply BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE announcement_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can read announcement comments" ON announcement_comments
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Members can insert own announcement comments" ON announcement_comments
  FOR INSERT WITH CHECK (
    family_id = (SELECT id FROM families WHERE user_id = auth.uid())
  );


-- Add is_admin column to families
ALTER TABLE families ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false;

-- After running this, go to Supabase Table Editor → families → find Gabby's row → set is_admin = true
