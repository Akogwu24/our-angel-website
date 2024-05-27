'use client';

import { PUBLIC_ROUTES } from '@/constants/routes';
import { HStack, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

import CustomDrawer from '../CustomDrawer';
import { fundManagersFeaturedTools, investorsFeaturedTools, startupFeaturedTools, userTypeTools } from './extras';
import { PrimaryLightButton } from '../CustomButtons';
import FeaturedProductMobile from './FeaturedProductMobile';
import Link from 'next/link';

export const MobileNav = ({ onClose }: { onClose?: () => void }) => {
  return (
    <>
      <Text fontSize={17} fontWeight={500} mb={5}>
        Products
      </Text>
      <UnorderedList as={Stack} m={0} className='flex flex-col' styleType={'none'} gap='5' fontWeight={500}>
        {userTypeTools.map((type) => (
          <CustomDrawer
            footer={<MobileNavFooter />}
            key={type.title}
            buttonProps={{ fontSize: 15 }}
            btnTitle={<FeaturedProductMobile title={type.title as string} />}
          >
            <Text my={5} bg='gray.100' py='3' px='2' borderRadius={4} align='center' color='gray.600' fontSize={15}>
              Featured Services and tools for {type.title}
            </Text>
            <Stack spacing={5}>
              {type.title === 'Investors' &&
                investorsFeaturedTools.map((tool, i) => <FeaturedProductMobile onClose={onClose} title={tool.title} path={tool.path} key={i} />)}

              {type.title === 'Startup' &&
                startupFeaturedTools.map((tool, i) => <FeaturedProductMobile onClose={onClose} title={tool.title} path={tool.path} key={i} />)}

              {type.title === 'Fund Managers' &&
                fundManagersFeaturedTools.map((tool, i) => <FeaturedProductMobile onClose={onClose} title={tool.title} path={tool.path} key={i} />)}
            </Stack>
          </CustomDrawer>
        ))}

        <ListItem fontSize={15} mt={2} as={Link} href={PUBLIC_ROUTES.PRICING}>
          Pricing
        </ListItem>
        <ListItem fontSize={15} as={Link} href={PUBLIC_ROUTES.RESOURCES}>
          Resources
        </ListItem>
      </UnorderedList>
    </>
  );
};

export const MobileNavFooter = () => {
  return (
    <Stack my={10} spacing={5}>
      <Text fontWeight={500} _hover={{ textDecoration: 'underline' }}>
        Login
      </Text>
      <PrimaryLightButton w='full' borderRadius={4}>
        Get Started
      </PrimaryLightButton>
    </Stack>
  );
};
