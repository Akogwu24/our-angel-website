import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { IncorporationHero } from './components/IncorporationHero';
import { incoporationCommonlyAskQuestions } from './components/extras';

export default function IncoporationPage() {
  return (
    <Stack as='main'>
      <IncorporationHero />
      <CommonlyAskedQuestions questions={incoporationCommonlyAskQuestions} />
      <FooterBlueTop
        heading='Ready to Transform Your Fund Management?'
        subheading="Join Ourangels Today - Become part of a community that's reshaping the future of venture capital."
        buttonText='Start now'
      />
    </Stack>
  );
}
