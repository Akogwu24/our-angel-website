'use sever';

import { PrimaryLightButton } from '@/common/CustomButtons';
import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { Flex, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react';
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

        <Flex bg='themeLightBlue' gap='2rem' justify={'space-between'} align='center' my={10} borderRadius={5} p={5}>
          <Stack color={'white'} flex='1' pr={'5%'}>
            <Text textStyle='h2' fontWeight={600} color={'white'}>
              Search for Your Business Name
            </Text>
            <Text>Scan the international databases to find out if your desired business name is globally available.</Text>

            <InputGroup size='md' bg='white' borderRadius={5}>
              <Input pr='4.5rem' type={'email'} placeholder='Enter your email' />
              <InputRightElement width='6rem'>
                <PrimaryLightButton mr={2} h='2rem' w='full'>
                  Search
                </PrimaryLightButton>
              </InputRightElement>
            </InputGroup>
          </Stack>

          <Image alt='..' src='/images/incorporation/incop.svg' width={100} height={100} className='h-[400px] rounded-xl object-cover flex-1' />
        </Flex>
        <WhatWeDo />
      </PageWrapper>
    </Stack>
  );
}
