'use client';

import { WhatWeDoCard } from '@/app/incorporation/components/WhatWeDoCard';
import { PrimaryLightButton } from '@/common/CustomButtons';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ArrowRight, Diagram, Graph, Notepad2 } from 'iconsax-react';
import React from 'react';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { AllInOneSolutionCard } from './AllInOneSolutionCard';

export function AllInOneSolution() {
  return (
    <PageWrapper>
      <Stack my={10} align={'center'} spacing={10}>
        <Box mt={10}>
          <Text textStyle={'h2'} lineHeight={2}>
            Your All-In-One Solution for Startup Investment
          </Text>
          <Text align={'center'}>
            Access our collection of tools designed to assist you with building a portfolio that
            <br /> mirrors your unique goals and preferences.
          </Text>
        </Box>
        <SimpleGrid as='section' my={3} columns={[3]} gap='2rem'>
          <AllInOneSolutionCard
            img={'/images/invest-in-ventures/Featured1.svg'}
            head='Simplified Investment Process'
            subheading='An entirely electronic and unified process for finalizing investments'
          />
          <AllInOneSolutionCard
            img={'/images/invest-in-ventures/Featured2.svg'}
            head='Intuitive Management Tools'
            subheading='EIn-depth portfolio analysis and investment insights dashboards'
          />
          <AllInOneSolutionCard
            img={'/images/invest-in-ventures/Featured3.svg'}
            head='Accurate Valuation & Market Insights'
            subheading='Invest confidently with precise valuations and market insights.'
          />
        </SimpleGrid>
        <PrimaryLightButton mb={5} rightIcon={<ArrowRight />} w={150}>
          Get Started
        </PrimaryLightButton>
      </Stack>
    </PageWrapper>
  );
}
