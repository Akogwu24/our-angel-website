'use client';

import { DarkPrimaryButton } from '@/common/CustomButtons';
import { Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { Building4, Icon as IconSaxIconType } from 'iconsax-react';
import React from 'react';
import { IconType } from 'react-icons/lib';
import { IoBagAddOutline } from 'react-icons/io5';
import { PageWrapper } from '@/common/PageWrapper';

type TSingleInvestCard = {
  heading: string;
  subheading: string;
  icon: IconSaxIconType | IconType;
};

const SingleInvestCard = ({ icon, heading, subheading }: TSingleInvestCard) => {
  return (
    <Flex bg='gray.50' p={10} borderRadius={5} shadow={'sm'}>
      <Stack>
        <Icon as={icon || Building4} bg='gray.100' color='themeLightBlue' boxSize={10} p={2} borderRadius={4} />
        <Text textStyle='h2'>{heading}</Text>
        <Text>{subheading}</Text>
        <DarkPrimaryButton w={150} mt={3}>
          Learn more
        </DarkPrimaryButton>
      </Stack>
    </Flex>
  );
};

export const InvestCards = () => {
  return (
    <PageWrapper>
      <Flex gap='2rem' py={10} my={8}>
        <SingleInvestCard
          icon={Building4}
          heading='Invest in startups'
          subheading='Directly invest in groundbreaking startups. Experience the thrill of being part of emerging companies shaping the future and 10x your investment in the next unicorn. '
        />
        <SingleInvestCard
          icon={IoBagAddOutline}
          heading='Invest in funds'
          subheading='Broaden your investment horizon with curated funds. Enjoy diversified exposure managed by industry experts, simplifying your journey towards impactful returns. '
        />
      </Flex>
    </PageWrapper>
  );
};
