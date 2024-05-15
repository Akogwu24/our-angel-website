import { AllInOneSolutionCard } from '@/app/invest-in-ventures/components/AllInOneSolutionCard';
import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { SimpleGrid, Stack } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import React from 'react';

export function CaptableHero() {
  return (
    <PageWrapper>
      <Stack as='section'>
        <Hero
          heading='Integrated Equity Management'
          imgPath='/images/captable/hero-image.svg'
          subheading='Efficient Cap Table management for the unique needs of both private and public companies - from early-stage equity management to IPO preparation, we’ve got you covered.'
          rightIcon={<ArrowRight />}
        />

        <SimpleGrid as='section' my={20} minChildWidth={250} gap='2rem'>
          <AllInOneSolutionCard
            head='Share team inboxes'
            img='/images/captable/Featured.svg'
            subheading='Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
          />
          <AllInOneSolutionCard
            head='Deliver instant answers'
            img='/images/captable/Featured2.svg'
            subheading='An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
          />
          <AllInOneSolutionCard
            head='Manage your team with reports'
            img='/images/captable/Featured1.svg'
            subheading='Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.'
          />
        </SimpleGrid>
      </Stack>
    </PageWrapper>
  );
}
