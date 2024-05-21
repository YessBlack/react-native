import { create } from "zustand";

interface AuthState {
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: User,
    login: (user: string, passoword: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,
    login: (email: string, password: string) => {
        set({
            status: 'authenticated',
            token: '1234',
            user: {
                name: 'John Doe',
                email: email
            }
        })
    },
    logout: () => {
        set({
            status: 'unauthenticated',
            token: undefined,
            user: undefined
        })
    }
}))