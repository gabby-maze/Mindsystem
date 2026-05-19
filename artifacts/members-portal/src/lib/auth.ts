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
  is_admin?: boolean;
}

function withTimeout<T>(promise: Promise<T>, ms = 12000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out — please check your connection and try again.")), ms)
    ),
  ]);
}

export async function signUp(email: string, password: string, familyName: string): Promise<{ error: string | null }> {
  try {
    const { error: signUpError } = await withTimeout(
      supabase.auth.signUp({
        email,
        password,
        options: { data: { family_name: familyName } },
      })
    );

    if (signUpError) return { error: signUpError.message };

    const { error: signInError } = await withTimeout(
      supabase.auth.signInWithPassword({ email, password })
    );
    if (signInError) return { error: signInError.message };

    return { error: null };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error — please check your connection and try again.";
    return { error: msg };
  }
}

export async function signIn(email: string, password: string): Promise<{ error: string | null }> {
  try {
    const { error } = await withTimeout(
      supabase.auth.signInWithPassword({ email, password })
    );
    if (error) return { error: error.message };
    return { error: null };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error — please check your connection and try again.";
    return { error: msg };
  }
}

export async function signOut() {
  try {
    await supabase.auth.signOut();
  } catch {
    // ignore sign-out errors
  }
}

export async function getFamily(): Promise<Family | null> {
  const { data: { user } } = await withTimeout(supabase.auth.getUser());
  if (!user) return null;

  const { data } = await withTimeout(
    supabase.from("families").select("*").eq("user_id", user.id).single()
  );
  return data as Family | null;
}

export async function getCurrentUser() {
  try {
    const { data: { user } } = await withTimeout(supabase.auth.getUser());
    return user;
  } catch {
    return null;
  }
}
