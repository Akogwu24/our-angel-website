import { PrimaryLightButton } from '@/common/CustomButtons';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, Stack, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

export function InvestorHero() {
  return (
    <Box bg='rgba(238, 243, 253, 1)'>
      <PageWrapper>
        <Stack spacing={5} w='full' alignItems={'center'} p={[0, 2, 5, 10]} pb={0}>
          <Text textStyle='h1' mt={5}>
            Invest In Venture Funds
          </Text>
          <Text align={'center'}>
            Invest alongside industry-leading fund managers and diversify your portfolio with <br /> our expertly curated selection of venture funds.
          </Text>
          <PrimaryLightButton my={5} rightIcon={<ArrowRight />}>
            Start now
          </PrimaryLightButton>
          <Image width={200} height={200} alt='...' src='/images/invest-in-ventures/hero-image.svg' className='w-full ' />
        </Stack>
      </PageWrapper>
    </Box>
  );
}
