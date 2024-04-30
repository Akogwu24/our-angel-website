import { Stack } from '@chakra-ui/react';
import React from 'react';
import StatupHero from './components/StartupHero';
import { InvestWithInsight } from './components/InvestWithInsight';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { commonlyAskedQuestions } from './components/extras';

export default function StartupPage() {
  return (
    <Stack as='main'>
      <StatupHero />
      <InvestWithInsight />
      <CommonlyAskedQuestions questions={commonlyAskedQuestions} />
      <FooterBlueTop buttonText='Start Investing' heading='Ready to Invest in Innovation?' />
    </Stack>
  );
}
