import type { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

export type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
