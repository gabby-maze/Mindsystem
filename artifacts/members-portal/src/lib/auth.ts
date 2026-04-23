import { supabase } from "./supabase";
import type { Tier } from "./data";

export interface Family {
  id: string;
  user_id: string;
  family_name: string;
  tier: Tier;
  created_at: string;
  enrollment_date?: string;
  maze_model_complete?: boolean;
}

export async function signUp(email: string, password: string, familyName: string): Promise<{ error: string | null }> {
  // Pass family_name in metadata so the database trigger can use it
  // The trigger automatically creates the families record server-side,
  // and sets the tier based on the approved_members table (GoHighLevel purchases)
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { family_name: familyName },
    },
  });

  if (error) return { error: error.message };
  return { error: null };
}

export async function signIn(email: string, password: string): Promise<{ error: string | null }> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  return { error: null };
}

export async function signOut() {
  await supabase.auth.signOut();
}

export async function getFamily(): Promise<Family | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase.from("families").select("*").eq("user_id", user.id).single();
  return data as Family | null;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
