import { PrimaryLightButton } from '@/common/CustomButtons';
import { PageWrapper } from '@/common/PageWrapper';
import { Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export function Hero() {
  return (
    <PageWrapper as='section'>
      <Flex align={[null, null, 'center']} gap='2rem' direction={['column', 'column', 'row']}>
        <Stack flex='1' maxW='500px'>
          <Text textStyle='h1' fontSize={['2.3rem', '2.5rem']}>
            Build your dream <br />
            <Text as='span' color='themeDarkBlue'>
              investment portfolio
            </Text>
          </Text>
          <Text>
            Invest in vetted startups & leading fund managers. Build a diversified portfolio alongside tops VC funds and angel investors with our
            easy-to-use tools.
          </Text>
          <PrimaryLightButton w='150px' mt={4}>
            Get Started
          </PrimaryLightButton>
        </Stack>
        <Flex flex={1} pos={'relative'}>
          <Image
            className='p-0  pt-6 lg:pt-16  pr-0 pb-0 w-full max-h-[700px]'
            width={100}
            height={120}
            src='/images/home/Content.svg'
            objectFit='cover'
            alt='portfolio'
            priority
          />
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
