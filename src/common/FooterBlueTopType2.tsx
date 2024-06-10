import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { PrimaryLightButton } from './CustomButtons';
import Image from 'next/image';

export default function FooterBlueTopType2() {
  return (
    <HStack pos={'relative'} bg='extremethemeDarkBlue' pl={[0, 5]} pt={[0, 5]} h={[300, 350]} color='white' my={10} borderRadius={5}>
      <Stack flex='1' ml={'5%'}>
        <Text>Build With OurAngel</Text>
        <Text textStyle={'h2'} fontSize={['2.5rem']} lineHeight={[1.1, 1.2]} color='white'>
          Join the next generation of <br /> builders
        </Text>
        <PrimaryLightButton w={150} color='themeLightBlue' bg='white'>
          Get Started
        </PrimaryLightButton>
      </Stack>

      <Image
        className='h-[250px] sm:w-[200px]  md:w-[300px] lg:w-[400px]  xl:w-[600px] self-end absolute right-0 md:static'
        alt='Build With OurAngel'
        width={400}
        height={300}
        src='/images/home/Group 5379.png'
      />
    </HStack>
  );
}
