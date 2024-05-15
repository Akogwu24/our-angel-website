import { PrimaryLightButton } from '@/common/CustomButtons';
import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, Flex, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import { WhatWeDo } from './WhatWeDoCard';

type TIncorporationHeroProps = {};

export function IncorporationHero({}: TIncorporationHeroProps) {
  return (
    <Stack>
      <PageWrapper>
        <Hero
          heading='Register Your Business Internationally'
          subheading='We make starting and running your business easy and straightforward.'
          btnText='Apply now'
          imgPath='/images/incorporation/inc.svg'
          rightIcon={<ArrowRight />}
        />

        <Flex bg='themeLightBlue' gap='2rem' justify={'space-between'} align='center' my={10} borderRadius={5} p={5} direction={['column', 'row']}>
          <Stack color={'white'} flex='1' pr={[0, 0, '5%']}>
            <Text textStyle='h2' fontWeight={600} fontSize={['2rem', '2rem', '2.2rem']} color={'white'}>
              Search for Your Business Name
            </Text>
            <Text py={4}>Scan the international databases to find out if your desired business name is globally available.</Text>

            <InputGroup size='md' bg='white' borderRadius={5}>
              <Input pr='4.5rem' type={'email'} placeholder='Enter your email' />
              <InputRightElement width='6rem'>
                <PrimaryLightButton mr={2} h='2rem' w='full'>
                  Search
                </PrimaryLightButton>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <Box flex={1}>
            <Image
              alt='..'
              src='/images/incorporation/incop.svg'
              width={100}
              height={100}
              className='min-h-[300px] lg:min-h-[400px] w-full rounded-xl object-cover '
            />
          </Box>
        </Flex>
        <WhatWeDo />
      </PageWrapper>
    </Stack>
  );
}
