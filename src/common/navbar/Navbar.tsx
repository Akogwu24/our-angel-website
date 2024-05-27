import { PUBLIC_ROUTES } from '@/constants/routes';

import Link from 'next/link';
import React from 'react';
import { PrimaryLightButton } from '../CustomButtons';
import Image from 'next/image';
import { PageWrapper } from '../PageWrapper';
import { Flex, HStack, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { ProductsPopOver } from './ProductsPopOver';
import { MdMenu } from 'react-icons/md';
import CustomDrawer from '../CustomDrawer';
import { MobileNav, MobileNavFooter } from './MobileNav';

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

        {/* //mobile nav */}
        <Flex justify={'space-between'} align='center' py={5} display={['flex', 'flex', 'none']}>
          <Link href={PUBLIC_ROUTES.HOME}>
            <Image src='/images/logo_black.svg' height={120} width={120} alt='logo' />
          </Link>

          <CustomDrawer footer={<MobileNavFooter />} btnTitle={<MdMenu size={25} />}>
            <MobileNav />
          </CustomDrawer>
        </Flex>
      </PageWrapper>
    </>
  );
}
