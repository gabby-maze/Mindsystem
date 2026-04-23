-- Run this in the Supabase SQL Editor
-- It fixes the RLS signup error and adds pre-approved email support

-- 1. PRE-APPROVED EMAILS TABLE
-- Gabby adds purchaser emails here (from GoHighLevel) with their tier
-- before they sign up, so the system knows what access to grant them
create table if not exists approved_members (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  tier text not null default 'free' check (tier in ('free','courtside','independent','supported','innerCircle')),
  family_name text,
  enrollment_date date,
  created_at timestamptz default now()
);

-- Gabby can read/write this table (no RLS needed, admin only)
-- You can also manage it directly in the Supabase table editor

-- 2. TRIGGER FUNCTION
-- Fires automatically when a new user signs up in Supabase Auth
-- Looks up their email in approved_members and sets tier accordingly
-- Falls back to 'free' if email is not pre-approved
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  approved approved_members%rowtype;
begin
  -- Check if this email was pre-approved (purchased a plan in GoHighLevel)
  select * into approved from approved_members where email = new.email;

  insert into public.families (
    user_id,
    family_name,
    tier,
    enrollment_date
  ) values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'family_name',
      approved.family_name,
      'My Family'
    ),
    coalesce(approved.tier, 'free'),
    approved.enrollment_date
  );

  return new;
end;
$$;

-- 3. ATTACH TRIGGER TO AUTH.USERS
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
