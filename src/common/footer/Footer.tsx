import { PUBLIC_ROUTES } from '@/constants/routes';
import { HStack, Icon, ListItem, SimpleGrid, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { explore, company, resources } from './extras';
import { PageWrapper } from '../PageWrapper';
import { BsTwitterX } from 'react-icons/bs';

import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
  return (
    <Stack bg='extremelyLightGrayBG' mt={5} py={10}>
      <PageWrapper>
        <SimpleGrid fontSize={14} fontWeight={600} color='#333' columns={[4]} minChildWidth={[200]} p={5} m={5}>
          <Stack>
            <Link href={PUBLIC_ROUTES.HOME}>
              <Image src='/images/logo_black.svg' height={150} width={150} alt='logo' />
            </Link>
            <Text maxW={150} mt={5} color='gray.600'>
              Invest in leaders and empower them to improve the world with technology
            </Text>
          </Stack>
          <Stack spacing={4}>
            <Text fontSize='12' color='gray.500'>
              Explore
            </Text>
            {explore.map((item, i) => (
              <Text key={i} as={Link} href={item.path}>
                {item?.link}
              </Text>
            ))}
          </Stack>
          <Stack spacing={4}>
            <Text fontSize='12' color='gray.500'>
              Company
            </Text>
            {company.map((item, i) => (
              <Text key={i} as={Link} href={item.path}>
                {item?.link}
              </Text>
            ))}
          </Stack>
          <Stack spacing={4}>
            <Text fontSize='12' color='gray.500'>
              Resources
            </Text>
            {resources.map((item, i) => (
              <Text key={i} as={Link} href={item.path}>
                {item?.link}
              </Text>
            ))}
          </Stack>
        </SimpleGrid>

        <HStack gap='1rem' py={5} fontSize='12' color='gray.600'>
          <Text>© 2023 Ourangel</Text>
          <UnorderedList className='flex gap-3'>
            <ListItem>Terms Service</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Disclosure</ListItem>
          </UnorderedList>

          <SocialMediaLinks />
        </HStack>
      </PageWrapper>
    </Stack>
  );
}
