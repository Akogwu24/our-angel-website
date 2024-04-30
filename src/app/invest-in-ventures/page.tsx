import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { AllInOneSolution } from './components/AllInOneSolution';
import { BecomeAnIvestor } from './components/BecomeAnIvestor';
import { InvestorHero } from './components/InvestorHero';

export default function InvestorsPage() {
  return (
    <Stack as='main'>
      <InvestorHero />
      <BecomeAnIvestor />
      <AllInOneSolution />
      <CommonlyAskedQuestions questions={[]} />
      <FooterBlueTop heading='Ready to Invest in Innovation?' buttonText='Start investing' />
    </Stack>
  );
}
