import { Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IPrimaryButtonProps {
  children: ReactNode;
  [props: string]: unknown;
}

export const PrimaryLightButton = ({ children, ...props }: IPrimaryButtonProps) => {
  return (
    <Button bg='themeLightBlue' color='white' {...props}>
      {children}
    </Button>
  );
};
