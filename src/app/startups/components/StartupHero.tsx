import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { howItWorks } from './extras';
import { PortfolioCard } from './PortfolioCard';

export default function StatupHero() {
  return (
    <PageWrapper>
      <Hero
        heading='Invest in Startups'
        subheading='Become an investor with OurAngel, expand your portfolio, and gain access to excellent opportunities from our carefully vetted list of startups.'
        imgPath='/images/startups/Content.svg'
      />

      <Stack my={20} as='section'>
        <Text textStyle={'h2'} fontSize={'2.5rem'}>
          How It works
        </Text>
        <Flex h={550} my={5} justify={'space-between'} gap={'2rem'} align='center'>
          <Stack flex='1' spacing={10} maxW='650px'>
            {howItWorks.map((item, i) => (
              <Flex key={i} align={'center'} gap='1rem'>
                <Image className='h-[45px] w-[45px]' width={20} height={20} objectFit='cover' alt={item?.img} src={item?.img} />
                <Box borderBottom={'1px #ddd solid'}>
                  <Text textStyle={'h3'} fontWeight={500} fontSize={'1.2rem'} lineHeight={2}>
                    {item.heading}
                  </Text>
                  <Text fontSize={15}>{item.subheading}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
          <Box pos={'relative'} h='full' flex={1}>
            <Image fill src='/images/startups/Content1.svg' alt='group' />
          </Box>
        </Flex>
      </Stack>

      <Stack as='section' bg='themeLightBlue' color='white' p={10} borderRadius={10} textAlign={'center'}>
        <Text textStyle={'h2'} color='white'>
          Diversify Your Portfolio
        </Text>
        <Text py={2}>
          On Ourangels, diversify your investments across various sectors including AI, Fintech, Healthcare, Renewable Energy, and <br /> Consumer Tech. Embrace the power
          of portfolio diversification to mitigate risk and uncover <br /> opportunities in the forefront of innovation.
        </Text>
        <SimpleGrid columns={[4]} gap='2rem' pt={4}>
          <PortfolioCard badgeText='Artificial intelligence' imgPath='/images/startups/AI.jpg' />
          <PortfolioCard badgeText='Fintech' imgPath='/images/startups/Image (1).png' />
          <PortfolioCard badgeText='Artificial intelligence' imgPath='/images/startups/Image (2).png' />
          <PortfolioCard badgeText='Artificial intelligence' imgPath='/images/startups/Image (3).png' />
        </SimpleGrid>
      </Stack>
    </PageWrapper>
  );
}
