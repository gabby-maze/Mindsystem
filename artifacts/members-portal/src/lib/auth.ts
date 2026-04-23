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
  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { family_name: familyName },
    },
  });

  if (signUpError) return { error: signUpError.message };

  // Explicitly sign in after signup so the session is always established
  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  if (signInError) return { error: signInError.message };

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
