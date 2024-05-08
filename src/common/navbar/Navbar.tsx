'use client';

import { PUBLIC_ROUTES } from '@/constants/routes';

import Link from 'next/link';
import React from 'react';
import { PrimaryLightButton } from '../CustomButtons';
import Image from 'next/image';
import { PageWrapper } from '../PageWrapper';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
import { ProductsPopOver } from './ProductsPopOver';
import { MdMenu } from 'react-icons/md';
import FeaturedToolCard from './FeaturedToolCard';
import { featuredTools } from './extras';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const data = await getData();

  // console.log(data);
  return (
    <>
      <PageWrapper>
        <Flex as='nav' justify='space-between' py='5' align={'center'} display={['none', 'none', 'flex']}>
          <Link href={PUBLIC_ROUTES.HOME}>
            <Image src='/images/logo_black.svg' height={120} width={120} alt='logo' />
          </Link>

          <HStack as={UnorderedList} styleType={'none'} gap='5' fontWeight={500}>
            <ListItem position={'relative'}>
              <ProductsPopOver />
            </ListItem>
            <ListItem as={Link} href={PUBLIC_ROUTES.PRICING}>
              Pricing
            </ListItem>
            <ListItem as={Link} href={PUBLIC_ROUTES.RESOURCES}>
              Resources
            </ListItem>
          </HStack>

          <HStack gap='2rem'>
            <Text as={Link} href={PUBLIC_ROUTES.LOGIN} fontWeight={500} _hover={{ textDecoration: 'underline' }}>
              Login
            </Text>
            <PrimaryLightButton borderRadius={4}>Get Started</PrimaryLightButton>
          </HStack>
        </Flex>

        <Flex justify={'space-between'} align='center' py={5} display={['flex', 'flex', 'none']}>
          <Link href={PUBLIC_ROUTES.HOME}>
            <Image src='/images/logo_black.svg' height={120} width={120} alt='logo' />
          </Link>

          <Box cursor={'pointer'} color='#333' onClick={onOpen}>
            {<MdMenu size={25} />}
          </Box>
        </Flex>

        {/* //mobile nav */}
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent maxW={400}>
            <DrawerCloseButton size={'sm'} />
            <DrawerHeader>
              <Link href={PUBLIC_ROUTES.HOME}>
                <Image src='/images/logo_black.svg' height={120} width={120} alt='logo' />
              </Link>
            </DrawerHeader>

            <DrawerBody>
              <UnorderedList as={Stack} m={0} className='flex flex-col' styleType={'none'} gap='5' fontWeight={500}>
                {/* <ListItem position={'relative'}>
                    <ProductsPopOver />
                  </ListItem> */}

                {featuredTools.map((tool, i) => (
                  <FeaturedToolCard key={i} tool={tool} />
                ))}
                <ListItem as={Link} href={PUBLIC_ROUTES.PRICING}>
                  Pricing
                </ListItem>
                <ListItem as={Link} href={PUBLIC_ROUTES.RESOURCES}>
                  Resources
                </ListItem>
              </UnorderedList>
              <Stack my={10} spacing={5}>
                <Text fontWeight={500} _hover={{ textDecoration: 'underline' }}>
                  Login
                </Text>
                <PrimaryLightButton maxW='200px' borderRadius={4}>
                  Get Started
                </PrimaryLightButton>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </PageWrapper>
    </>
  );
}
