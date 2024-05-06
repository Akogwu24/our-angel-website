import Hero from '@/common/Hero';
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';
import { VentureBlock } from './VentureBlock';
import { PageWrapper } from '@/common/PageWrapper';

export function ValuationsHero() {
  return (
    <>
      <Stack bg='extremelyLightGrayBG'>
        <Box ml={'12%'}>
          <Hero
            heading='Audit-Ready 409a Valuations'
            subheading='Fast, Accurate & Compliant'
            imgPath='/images/valuations/mock.svg'
            btnText='Apply now'
            rightIcon={<ArrowRight />}
          />
        </Box>
      </Stack>
      <SimpleGrid my={16} columns={[3]} gap='2rem' justifyItems={'center'}>
        <VentureBlock
          imagePath='/images/valuations/Featured icon (3).svg'
          heading='Personalized Assessments'
          subheading='We carefully consider the unique aspects of your business to produce fast, affordable, and accurate 409A valuations.'
        />
        <VentureBlock
          imagePath='/images/valuations/Featured icon (4).svg'
          heading='Equity Management'
          subheading='Our professionals and cutting-edge software ensure that your valuation stands up to scrutiny from the IRS, auditors, and SEC examinations.'
        />
        <VentureBlock
          imagePath='/images/valuations/Featured icon (5).svg'
          heading='Get in-house support'
          subheading='Count on our support team to assist you through every turn of the valuation process. We’ll maintain accurate reports and show you how to minimize audit risk.'
        />
      </SimpleGrid>

      <Box as='section' my={10}>
        <PageWrapper as={Stack} spacing={10}>
          <Flex align={'center'} justify='center' gap='2rem'>
            <Image width={100} height={100} alt='...' src='/images/valuations/promising.svg' className='flex-1' />

            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>Invest in Promising Startups</Text>
              <Text>
                Get reliable 409A Valuations that seamlessly integrate into your
                <br /> company&#39;s profile
              </Text>
            </Box>
          </Flex>

          <Flex align={'center'} justify='center' gap='2rem' py={10} mt={10}>
            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>First-hand Industry Knowledge</Text>
              <Text>
                With a background in big banking and accounting organizations, <br />
                the OurAngel Valuations team and tools bring a wealth of direct <br /> experience gathered over many years.
              </Text>
            </Box>

            <Image width={100} height={100} alt='...' src='/images/valuations/promising2.svg' className='flex-1' />
          </Flex>

          <Flex align={'center'} justify='center' gap='2rem' py={10} mb={10}>
            <Image width={100} height={100} alt='...' src='/images/valuations/promising1.svg' className='flex-1' />

            <Box flex='1' maxW='600px'>
              <Text textStyle={'h2'}>Detailed and Transparent Reports</Text>
              <Text>
                At OurAngel, we believe that transparency is a cornerstone of accurate and reliable 409A valuations.
                <br /> That&#39;s why we provide clear and comprehensive reports, explaining our methodology and assumptions in detail. 
              </Text>
            </Box>
          </Flex>
        </PageWrapper>
      </Box>
    </>
  );
}
