import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Guard: if env vars are missing, create a mock client so the app doesn't crash
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: (cb) => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase belum dikonfigurasi. Tambahkan file .env' } }),
    signInWithPassword: () => Promise.resolve({ data: null, error: { message: 'Supabase belum dikonfigurasi. Tambahkan file .env' } }),
    signOut: () => Promise.resolve({ error: null }),
  },
});

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (console.warn('⚠️ VITE_SUPABASE_URL atau VITE_SUPABASE_ANON_KEY tidak ditemukan di .env. Menggunakan mock client.'), createMockClient());
