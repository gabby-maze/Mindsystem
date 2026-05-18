-- MindSystem Members Portal — Supabase Schema
-- Run this in the Supabase SQL Editor for your project

-- FAMILIES TABLE (core membership record)
create table if not exists families (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  family_name text not null,
  tier text not null default 'free' check (tier in ('free','courtside','independent','supported','innerCircle')),
  enrollment_date date,
  maze_model_complete boolean default false,
  created_at timestamptz default now()
);

-- PROGRESS TABLE (lesson completions)
create table if not exists progress (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  course_id text not null,
  lesson_id text not null,
  completed_at timestamptz default now(),
  unique(family_id, course_id, lesson_id)
);

-- COMMENTS TABLE (per-lesson comments)
create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  course_id text not null,
  lesson_id text not null,
  comment_text text not null,
  is_gabby_reply boolean default false,
  created_at timestamptz default now()
);

-- QUESTIONS TABLE (ask Gabby)
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  course_id text,
  lesson_id text,
  question_text text not null,
  answer_text text,
  answered_at timestamptz,
  created_at timestamptz default now()
);

-- Add lesson_id if upgrading an existing questions table
alter table questions add column if not exists lesson_id text;

-- NOTIFICATIONS TABLE
create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null,
  tier text, -- null = all tiers; otherwise matches a specific tier
  link text,
  created_at timestamptz default now()
);

-- NOTIFICATION_READS TABLE (track which families read which notifications)
create table if not exists notification_reads (
  id uuid primary key default gen_random_uuid(),
  family_id uuid references families(id) on delete cascade not null,
  notification_id uuid references notifications(id) on delete cascade not null,
  read_at timestamptz default now(),
  unique(family_id, notification_id)
);

-- ROW LEVEL SECURITY

alter table families enable row level security;
alter table progress enable row level security;
alter table comments enable row level security;
alter table questions enable row level security;
alter table notifications enable row level security;
alter table notification_reads enable row level security;

-- Families: users can only see and edit their own family
create policy "family_select_own" on families for select using (auth.uid() = user_id);
create policy "family_insert_own" on families for insert with check (auth.uid() = user_id);
create policy "family_update_own" on families for update using (auth.uid() = user_id);

-- Progress: read/write own
create policy "progress_select_own" on progress for select
  using (family_id in (select id from families where user_id = auth.uid()));
create policy "progress_insert_own" on progress for insert
  with check (family_id in (select id from families where user_id = auth.uid()));

-- Comments: all members can read; write own
create policy "comments_select_all" on comments for select using (true);
create policy "comments_insert_own" on comments for insert
  with check (family_id in (select id from families where user_id = auth.uid()));

-- Questions: read/write own
create policy "questions_select_own" on questions for select
  using (family_id in (select id from families where user_id = auth.uid()));
create policy "questions_insert_own" on questions for insert
  with check (family_id in (select id from families where user_id = auth.uid()));

-- Notifications: all authenticated users can read
create policy "notifications_select_all" on notifications for select using (auth.uid() is not null);

-- Notification reads: read/insert own
create policy "notif_reads_select_own" on notification_reads for select
  using (family_id in (select id from families where user_id = auth.uid()));
create policy "notif_reads_insert_own" on notification_reads for insert
  with check (family_id in (select id from families where user_id = auth.uid()));
create policy "notif_reads_upsert_own" on notification_reads for update
  using (family_id in (select id from families where user_id = auth.uid()));
