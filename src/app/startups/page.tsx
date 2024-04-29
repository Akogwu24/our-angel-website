import { Stack } from '@chakra-ui/react';
import React from 'react';
import StatupHero from './components/StartupHero';
import { InvestWithInsight } from './components/InvestWithInsight';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';

export default function StartupPage() {
  return (
    <Stack as='main'>
      <StatupHero />
      <InvestWithInsight />
      <CommonlyAskedQuestions />
      <FooterBlueTop buttonText='Start Investing' heading='Ready to Invest in Innovation?' />
    </Stack>
  );
}
