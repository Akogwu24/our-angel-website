import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import FundManagerHero from './components/FundManagerHero';
import { FeaturesForSuccess } from './components/FeaturesForSuccess';
import { HowItWorks } from './components/HowItWorks';
import { commonlyAskedQuestions } from '../startups/components/extras';

export default function FundManagementPage() {
  return (
    <Stack as='main'>
      <FundManagerHero />
      <FeaturesForSuccess />
      <HowItWorks />
      <CommonlyAskedQuestions questions={commonlyAskedQuestions} />
      <FooterBlueTop
        heading='Ready to Transform Your Fund Management?'
        subheading="Join Ourangels Today - Become part of a community that's reshaping the future of venture capital."
        buttonText='Start now'
      />
    </Stack>
  );
}
