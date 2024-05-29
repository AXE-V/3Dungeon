import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';

interface AuthUser {
  session: Session | null | undefined;
  user: User | null | undefined;
  signOut: () => void;
}

const AuthContext = createContext<AuthUser>({ session: null, user: null, signOut: () => {} });

export const AuthProvider = ({ children }: any) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setAuthData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(session);
      setUser(session?.user);
      setLoading(false);
    };

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
      setUser(session?.user);
      setLoading(false);
    });

    setAuthData();

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const value: AuthUser = {
    session: session,
    user: user,
    signOut: () => supabase.auth.signOut(),
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
