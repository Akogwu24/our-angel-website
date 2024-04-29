'use client';

import { PrimaryLightButton } from '@/common/CustomButtons';
import { Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { ArrowRight, Diagram, Graph, Icon as IconsaxIconType, Notepad2 } from 'iconsax-react';
import React from 'react';
import { IconType } from 'react-icons';
import { BiMessageRoundedDots } from 'react-icons/bi';

type TWhatWeDoCardProps = {
  head: string;
  subheading: string;
  icon: IconsaxIconType | IconType;
};

export function WhatWeDoCard({ head, icon, subheading }: TWhatWeDoCardProps) {
  return (
    <Stack>
      <Icon as={icon || Notepad2} fontSize={40} p={1.5} border='1px solid #ddd' borderRadius={'full'} />
      <Text textStyle={'h3'} fontSize={'1.2rem'} fontWeight={500}>
        {head}
      </Text>
      <Text fontSize={15}>{subheading}</Text>
    </Stack>
  );
}

export const WhatWeDo = () => {
  return (
    <Stack my={10} align={'center'} spacing={10}>
      <Text mt={10} textStyle={'h2'}>
        What we do
      </Text>
      <SimpleGrid as='section' columns={[4]} gap='2rem' justifyItems={'center'}>
        <WhatWeDoCard
          icon={Notepad2}
          head='Easy Business Registration'
          subheading='Simplify your business registration process and incorporate across multiple countries'
        />
        <WhatWeDoCard
          icon={Graph}
          head='Equity Management'
          subheading='Easily track and update your cap table on OurAngel as you secure founder shares, issue SAFEs, and distribute equity to employees.'
        />
        <WhatWeDoCard
          icon={Diagram}
          head='Fundraising and Management'
          subheading='Easily generate data rooms, distribute SAFEs, and oversee equity rounds while ensuring automatic cap table updates as funds come in.'
        />
        <WhatWeDoCard icon={BiMessageRoundedDots} head='Expert Guidance' subheading='Let us handle the complexities, so you can focus on building your business.' />
      </SimpleGrid>
      <PrimaryLightButton mb={5} rightIcon={<ArrowRight />} w={200}>
        Get Registered Today!
      </PrimaryLightButton>
    </Stack>
  );
};
