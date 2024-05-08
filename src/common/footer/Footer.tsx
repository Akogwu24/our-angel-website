import { PUBLIC_ROUTES } from '@/constants/routes';
import { Grid, GridItem, HStack, ListItem, SimpleGrid, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { explore, company, resources } from './extras';
import { PageWrapper } from '../PageWrapper';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
  return (
    <>
      <PageWrapper>
        <Text maxW='1100px' px='1%' mx='auto' my={5}>
          The information on this website is provided for informational purposes only and should not be considered a recommendation for any
          investment, service, product, or advice. It does not constitute an offer or solicitation for any securities or investment opportunities.
          Before making any investment decisions, ensure that you thoroughly review and understand the associated risks and legal documents. We
          recommend seeking professional advice and conducting your own due diligence alongside ours. By using this website, you agree that OurAngel
          is not liable for any loss or damage resulting from your reliance on the information provided. If you have any questions or concerns
          regarding this disclaimer, please contact our support team by sending an email to complaints@ourangel.com. 
        </Text>
      </PageWrapper>
      <Stack bg='extremelyLightGrayBG' mt={[10]} py={[0, 10]}>
        <PageWrapper>
          <Grid fontSize={14} fontWeight={600} color='gray.800' p={[0, 5]} m={[0, 5]} gap='2rem' templateColumns='repeat(12, 1fr)' maxW={'100%'}>
            <GridItem colSpan={[12, 12, 6, 3]}>
              <Link href={PUBLIC_ROUTES.HOME}>
                <Image src='/images/logo_black.svg' height={150} width={150} alt='logo' />
              </Link>
              <Text mt={5} color='gray.600'>
                Invest in leaders and empower them to improve the world with technology
              </Text>
            </GridItem>

            <GridItem colSpan={[12, 6, 6, 3]} as={Stack} spacing={4}>
              <Text fontSize='13' color='gray.500'>
                Explore
              </Text>
              {explore.map((item, i) => (
                <Text key={i} as={Link} href={item.path}>
                  {item?.link}
                </Text>
              ))}
            </GridItem>
            <GridItem colSpan={[12, 6, 6, 3]} as={Stack} spacing={4}>
              <Text fontSize='13' color='gray.500'>
                Company
              </Text>
              {company.map((item, i) => (
                <Text key={i} as={Link} href={item.path}>
                  {item?.link}
                </Text>
              ))}
            </GridItem>

            <GridItem colSpan={[12, 6, 6, 3]} as={Stack} spacing={4}>
              <Text fontSize='13' color='gray.500'>
                Resources
              </Text>
              {resources.map((item, i) => (
                <Text key={i} as={Link} href={item.path}>
                  {item?.link}
                </Text>
              ))}
            </GridItem>
          </Grid>

          <HStack gap='1rem' py={5} fontSize='12' color='gray.600' wrap='wrap'>
            <Text>© 2023 Ourangel</Text>
            <UnorderedList className='flex gap-8 flex-wrap'>
              <ListItem>Terms Service</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Disclosure</ListItem>
            </UnorderedList>

            <SocialMediaLinks />
          </HStack>
        </PageWrapper>
      </Stack>
    </>
  );
}
