import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { captableCommonlyaskedQuestions } from './components/extras';
import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { CaptableHero } from './components/CaptableHero';
import { CaptableSolutions } from './components/CaptableSolutions';

export default function CaptablePage() {
  return (
    <Stack as='main'>
      <CaptableHero />
      <CaptableSolutions />
      <CommonlyAskedQuestions questions={captableCommonlyaskedQuestions} />
      <FooterBlueTop heading='Ready to Invest in Innovation?' buttonText='Start investing' />
    </Stack>
  );
}
