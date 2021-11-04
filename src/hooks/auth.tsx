import React, { createContext, useContext, useState } from "react";
import * as AuthSessions from "expo-auth-session";
import { api } from "../services/api";

const CLIENT_ID = "01d3581312999af840c9";
const SCOPE = "read:user";

type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};

type AuthContextData = {
  user: User | null;
  isSignIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    setIsSignIn(true);
    const authUrl = `https://github.com/login/oauth/authorize?scope=${SCOPE}&client_id=${CLIENT_ID}`;
    const { params } = (await AuthSessions.startAsync({
      authUrl,
    })) as AuthorizationResponse;

    if (params && params.code) {
      const authResponse = await api.post("/authenticate", {
        code: params.code,
      });
      const { user, token } = authResponse.data as AuthResponse;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    setIsSignIn(false);
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
