import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { raiseCommonlyAksedQuestions } from './components/extras';
import { RaoseHero } from './components/RaoseHero';
import { FeaturesDesign } from './components/FeaturesDesign';
import HowRaiseWorks from './components/HowRaiseWorks';

export default function RaisePage() {
  return (
    <Stack as='main'>
      <RaoseHero />
      <FeaturesDesign />
      <HowRaiseWorks />
      <CommonlyAskedQuestions questions={raiseCommonlyAksedQuestions} />
      <FooterBlueTop heading='Ready to Invest in Innovation?' buttonText='Start investing' />
    </Stack>
  );
}
