'use client';

import { Children, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { PUBLIC_ROUTES } from '@/constants/routes';
import {
  As,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

type TCustomDrawer = {
  children: ReactNode;
  footer?: ReactNode;
  buttonProps?: unknown;
  btnTitle: string | ReactNode;
  as?: As;
};

export default function CustomDrawer({ children, footer, buttonProps, btnTitle, as }: TCustomDrawer) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { onClose });
    }
    return child;
  });

  return (
    <>
      <Box as={as} _focus={{ border: 'none' }} fontSize={14} fontWeight={500} onClick={onOpen} _hover={{ opacity: 0.8 }} {...(buttonProps as object)}>
        {btnTitle}
      </Box>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW={400}>
          <DrawerCloseButton size={'sm'} />
          <DrawerHeader>
            <Link href={PUBLIC_ROUTES.HOME}>
              <Image src='/images/logo_black.svg' height={120} width={120} alt='logo' />
            </Link>
          </DrawerHeader>

          <DrawerBody>{childrenWithProps}</DrawerBody>
          <DrawerFooter w='full' justifyContent={'start'} display={'block'}>
            {footer}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
