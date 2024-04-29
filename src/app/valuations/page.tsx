import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { ValuationsHero } from './components/ValuationsHero';

export default function ValuationPage() {
  return (
    <Stack as='main'>
      <ValuationsHero />
      <CommonlyAskedQuestions />
      <FooterBlueTop />
    </Stack>
  );
}
