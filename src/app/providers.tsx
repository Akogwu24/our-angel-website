'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const Theme: Partial<typeof theme> = extendTheme({
    colors: {
      themeDarkBlue: '#012677',
      extremethemeDarkBlue: '#062158',
      themeLightBlue: '#0245D8',
      headingTextColor: '#03171A',
      bodyTextColor: '#374151',
      extremelyLightGrayBG: '#FAFBFE',
    },
    textStyles: {
      h1: {
        color: '#121212',
        fontWeight: '500',
        fontSize: ['2.3rem', '2.5rem', '50px'],
        lineHeight: 1.2,
      },
      h2: {
        color: '#121212',
        fontWeight: '500',
        fontSize: ['25px', '28px', '32px', '38px'],
      },
      h3: {
        color: '#121212',
        fontWeight: '400',
        fontSize: '28px',
      },
    },

    styles: {
      global: {
        body: {
          backgroundColor: '#fff',
          // fontSize: '14px',
          color: '#374151',
          fontWeight: '400',
        },
      },
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={Theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
