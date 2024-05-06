import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { howRaiseWorks, raiseCommonlyAksedQuestions, raiseSwappedImages } from './components/extras';
import { RaoseHero } from './components/RaoseHero';
import { FeaturesDesign } from './components/FeaturesDesign';
import { ProgressBottomBorderWithSwappingImages } from '@/common/ProgressBottomBorderWithSwappingImages';

export default function RaisePage() {
  return (
    <Stack as='main'>
      <RaoseHero />
      <FeaturesDesign />
      {/* <HowRaiseWorks /> */}
      <ProgressBottomBorderWithSwappingImages sectionHeading='How It Works' data={howRaiseWorks} images={raiseSwappedImages} />
      <CommonlyAskedQuestions questions={raiseCommonlyAksedQuestions} />
      <FooterBlueTop heading='Ready to Invest in Innovation?' buttonText='Start investing' />
    </Stack>
  );
}
