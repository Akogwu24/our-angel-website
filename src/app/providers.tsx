// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const Theme: Partial<typeof theme> = extendTheme({
    colors: {
      themeDarkBlue: '#012677',
      themeLightBlue: '#0245D8',
      headingTextColor: '#03171A',
      bodyTextColor: '#374151',
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={Theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
