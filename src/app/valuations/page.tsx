import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { ValuationsHero } from './components/ValuationsHero';
import { valuationCommonlyAskedQuestions } from './components/extras';

export default function ValuationPage() {
  return (
    <Stack as='main'>
      <ValuationsHero />
      <CommonlyAskedQuestions questions={valuationCommonlyAskedQuestions} />
      <FooterBlueTop
        buttonText='Start now'
        subheading="Join Ourangels Today - Become part of a community that's reshaping the future of venture capital."
        heading='Ready to Transform Your Fund Management?'
      />
    </Stack>
  );
}
