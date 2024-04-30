import { Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface IPrimaryButtonProps {
  children: ReactNode;
  [props: string]: unknown;
}

export const PrimaryLightButton = ({ children, ...props }: IPrimaryButtonProps) => {
  return (
    <Button bg='themeLightBlue' fontWeight={500} fontSize={14} borderRadius={3} color='white' {...props}>
      {children}
    </Button>
  );
};

export const DarkPrimaryButton = ({ children, ...props }: IPrimaryButtonProps) => {
  return (
    <Button bg='themeDarkBlue' fontWeight={500} fontSize={14} borderRadius={3} color='white' {...props}>
      {children}
    </Button>
  );
};

export const OutlinedButton = ({ children, ...props }: IPrimaryButtonProps) => {
  return (
    <Button variant={'outline'} fontWeight={500} fontSize={14} outline={'1px solid #012677'} borderRadius={3} color='themeDarkBlue' {...props}>
      {children}
    </Button>
  );
};
