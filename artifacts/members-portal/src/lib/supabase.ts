import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

const isConfigured = SUPABASE_URL.startsWith("https://") && SUPABASE_ANON_KEY.length > 20;

const clientOptions = {
  auth: {
    lock: async <T>(_name: string, _acquireTimeout: number, fn: () => Promise<T>): Promise<T> => fn(),
  },
};

export const supabase = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, clientOptions)
  : createClient(
      "https://placeholder.supabase.co",
      "placeholder-key-placeholder-key-placeholder-key-xx",
      clientOptions,
    );

export const supabaseReady = isConfigured;
