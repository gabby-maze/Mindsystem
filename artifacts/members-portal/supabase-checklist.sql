-- Run this in Supabase SQL Editor

-- Checklist progress (sequential onboarding steps for Supported + Inner Circle)
CREATE TABLE IF NOT EXISTS checklist_progress (
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  step_key TEXT NOT NULL,
  completed_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (family_id, step_key)
);

ALTER TABLE checklist_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can read own checklist" ON checklist_progress
  FOR SELECT USING (
    family_id = (SELECT id FROM families WHERE user_id = auth.uid())
  );

CREATE POLICY "Members can insert own checklist" ON checklist_progress
  FOR INSERT WITH CHECK (
    family_id = (SELECT id FROM families WHERE user_id = auth.uid())
  );

-- MAZE completions (tracks when family completes the MAZE model)
CREATE TABLE IF NOT EXISTS maze_completions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  completed_at TIMESTAMP DEFAULT now(),
  week_completed INTEGER
);

ALTER TABLE maze_completions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can read own maze completions" ON maze_completions
  FOR SELECT USING (
    family_id = (SELECT id FROM families WHERE user_id = auth.uid())
  );

CREATE POLICY "Members can insert own maze completions" ON maze_completions
  FOR INSERT WITH CHECK (
    family_id = (SELECT id FROM families WHERE user_id = auth.uid())
  );
