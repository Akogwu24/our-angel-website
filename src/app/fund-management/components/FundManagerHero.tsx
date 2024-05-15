import Hero from '@/common/Hero';
import { PageWrapper } from '@/common/PageWrapper';
import { WhatsNewCard } from '@/common/WhatsNewCard';
import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import React from 'react';

export default function FundManagerHero() {
  return (
    <PageWrapper>
      <Stack as='section'>
        <Hero
          heading='Elevate Your Fund Management Experience'
          subheading='Unlock the full potential of your venture capital endeavors with Ourangels. '
          imgPath='/images/fund-management/Content.svg'
          rightIcon={<ArrowRight />}
        />

        <Text textStyle={'h2'} fontSize={['1.8rem', '2rem', '2.5rem']} align='center' mt={16}>
          Why Choose Ourangels for Fund Management?
        </Text>
        <Text align='center' maxW='900px' mx='auto' mb={5}>
          Our platform offers an unparalleled suite of tools designed to streamline the fundraising process, empower your investments in
          high-potential startups, and manage your relationships with limited partners—all in one place.
        </Text>

        <SimpleGrid minChildWidth={250} gap='2rem' my={5}>
          <WhatsNewCard
            heading='Innovative Platform'
            subheading='Ourangels is built for fund managers like you. We understand the complexities of fund management and offer a bespoke platform that simplifies operations, from raising capital to distributing returns.'
            image='/images/fund-management/1.svg'
          />
          <WhatsNewCard
            heading='Network Access'
            subheading='Join a vibrant community of investors, startups, and fellow fund managers. Ourangels provides you with the network you need to source funds and discover investment opportunities efficiently.'
            image='/images/fund-management/2.svg'
          />
          <WhatsNewCard
            heading='Comprehensive Management Tools'
            subheading='Our platform is equipped with advanced tools for managing limited partners, ensuring transparency, and streamlining communication and reporting.'
            image='/images/fund-management/3.svg'
          />
        </SimpleGrid>
      </Stack>
    </PageWrapper>
  );
}
