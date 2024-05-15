import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { howItWorks, swappedImages } from './extras';
import { PortfolioCard } from './PortfolioCard';
import { ProgressBottomBorderWithSwappingImages } from '@/common/ProgressBottomBorderWithSwappingImages';

export default function StatupHero() {
  return (
    <PageWrapper>
      <Hero
        heading='Invest in Startups'
        subheading='Become an investor with OurAngel, expand your portfolio, and gain access to excellent opportunities from our carefully vetted list of startups.'
        imgPath='/images/startups/Content.svg'
      />
      <ProgressBottomBorderWithSwappingImages sectionHeading='How It Works' data={howItWorks} images={swappedImages} />

      <Stack as='section' bg='themeLightBlue' color='white' p={[2, 4, 5, 10]} borderRadius={10} textAlign={'center'}>
        <Text textStyle={'h2'} color='white' p={5}>
          Diversify Your Portfolio
        </Text>
        <Text py={2} px={3}>
          On Ourangels, diversify your investments across various sectors including AI, Fintech, Healthcare, Renewable Energy, and <br /> Consumer
          Tech. Embrace the power of portfolio diversification to mitigate risk and uncover <br /> opportunities in the forefront of innovation.
        </Text>
        <SimpleGrid columns={[1, 2, 2, 4]} gap='2rem' pt={4}>
          <PortfolioCard badgeText='Artificial intelligence' imgPath='/images/startups/ai.webp' />
          <PortfolioCard badgeText='Renewable energy' imgPath='/images/startups/renewable-energy.webp' />
          <PortfolioCard badgeText='Fintech' imgPath='/images/startups/fintech.webp' />
          <PortfolioCard badgeText='Health Care' imgPath='/images/startups/healthcare.webp' />
        </SimpleGrid>
      </Stack>
    </PageWrapper>
  );
}
