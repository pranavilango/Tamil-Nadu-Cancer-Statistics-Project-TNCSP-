// app/providers.tsx
'use client';

import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { useState, useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    // This effect listens to the 'dark' class on the <html> element
    // which is controlled by your ThemeToggle component.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
          setThemeType(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Set initial theme
    setThemeType(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

    return () => observer.disconnect();
  }, []);

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}