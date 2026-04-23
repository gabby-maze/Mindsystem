import { supabase } from "./supabase";
import type { Tier } from "./data";

export interface Family {
  id: string;
  email: string;
  family_name: string;
  tier: Tier;
  created_at: string;
  enrollment_date?: string;
  maze_model_complete?: boolean;
}

export async function signUp(email: string, password: string, familyName: string): Promise<{ error: string | null }> {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };

  if (data.user) {
    const { error: insertError } = await supabase.from("families").insert({
      id: data.user.id,
      email,
      family_name: familyName,
      tier: "free",
      terms_agreed: true,
      terms_agreed_at: new Date().toISOString(),
    });
    if (insertError) return { error: insertError.message };
  }

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

  const { data } = await supabase.from("families").select("*").eq("id", user.id).single();
  return data as Family | null;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
