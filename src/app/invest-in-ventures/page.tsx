import { CommonlyAskedQuestions } from '@/common/CommonlyAskedQuestions';
import { FooterBlueTop } from '@/common/FooterBlueTop';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { AllInOneSolution } from './components/AllInOneSolution';
import { InvestorHero } from './components/InvestorHero';
import { ProgressBottomBorderWithSwappingImages } from '@/common/ProgressBottomBorderWithSwappingImages';
import { becomeAnInvestor, images, investInVenturesCommonlyAskedQuestions } from './components/extras';

export default function InvestorsPage() {
  return (
    <Stack as='main'>
      <InvestorHero />
      {/* <BecomeAnIvestor /> */}
      <ProgressBottomBorderWithSwappingImages sectionHeading=' Become An Investor In 3 Steps' data={becomeAnInvestor} images={images} />
      <AllInOneSolution />
      <CommonlyAskedQuestions questions={investInVenturesCommonlyAskedQuestions} />
      <FooterBlueTop heading='Ready to Invest in Innovation?' buttonText='Start investing' />
    </Stack>
  );
}
