import { As, Box, Container, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type TPageWrapperProps = {
  children: ReactNode;
  as?: As;
  [x: string]: unknown;
};

export function PageWrapper({ children, as, ...props }: TPageWrapperProps) {
  return (
    <Box className=' w-full max-w-[1400px] mx-auto px-[4%]' as={as} {...props}>
      {children}
    </Box>
  );
}
