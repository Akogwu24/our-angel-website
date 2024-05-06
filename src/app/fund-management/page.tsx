import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import FundManagerHero from './components/FundManagerHero';
import { FeaturesForSuccess } from './components/FeaturesForSuccess';
import { commonlyAskedQuestions } from '../startups/components/extras';
import { ProgressBottomBorderWithSwappingImages } from '@/common/ProgressBottomBorderWithSwappingImages';
import { fundSwappedImages, howItWorks } from './components/extras';

export default function FundManagementPage() {
  return (
    <Stack as='main'>
      <FundManagerHero />
      <FeaturesForSuccess />
      <ProgressBottomBorderWithSwappingImages sectionHeading='How It Works' data={howItWorks} images={fundSwappedImages} />
      <CommonlyAskedQuestions questions={commonlyAskedQuestions} />
      <FooterBlueTop
        heading='Ready to Transform Your Fund Management?'
        subheading="Join Ourangels Today - Become part of a community that's reshaping the future of venture capital."
        buttonText='Start now'
      />
    </Stack>
  );
}
