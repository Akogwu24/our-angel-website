import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

export function RaiseHero() {
  return (
    <PageWrapper>
      <Stack>
        <Hero
          heading='Accelerate Your Fundraising Journey'
          subheading='We help startups raise money for every stage of funding, from initial investment to IPO.'
          imgPath='/images/raise/raise-hero.svg'
          rightIcon={<ArrowRight />}
        />
      </Stack>

      <Box as='section' my={20}>
        <Text textStyle={'h2'} fontSize={['2rem', '2.5rem']} align={'center'} my={10}>
          Fully Integrated Support For Startup founders
        </Text>
        <Stack spacing={20}>
          <Flex align={'center'} justify='center' gap='2rem' direction={['column', 'column', 'row']}>
            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>Simplify Your Fundraising Experience</Text>
              <Text>
                Raise funds without getting bogged down by administrative tasks.
                <br /> We handle accreditation, signatures, banking, and other essentials for SAFE, note, and equity rounds. 
              </Text>
            </Box>

            <Box flex='1'>
              <Image width={200} height={200} alt='...' src='/images/raise/simplify.svg' className='rounded-xl h-full w-full' />
            </Box>
          </Flex>

          <Flex align={'center'} justify='center' gap='3rem' direction={['column-reverse', 'column-reverse', 'row']}>
            <Box flex='1'>
              <Image width={100} height={100} alt='...' src='/images/raise/customize.svg' className='flex-1 rounded-xl h-full w-full' />
            </Box>

            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>Customize your Raise to Meet your needs</Text>
              <Text>
                Explore flexible fund raising options and customize them to meet the unique needs of your startup, from pre-seed to Series C.
              </Text>
            </Box>
          </Flex>

          <Flex align={'center'} justify='center' gap='2rem' direction={['column', 'column', 'row']}>
            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>
                Raise Funds Confidently with Current <br /> Information
              </Text>
              <Text>
                Access real-time, data-driven insights into the startup ecosystem - so you can make informed decisions about fundraising and growth
                strategies.
              </Text>
            </Box>
            <Box flex={1}>
              <Image width={100} height={100} alt='...' src='/images/raise/raise-fund.svg' className='rounded-xl w-full h-full' />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </PageWrapper>
  );
}
