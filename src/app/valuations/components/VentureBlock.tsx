import { Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type TVentureBlockProps = {
  imagePath: string;
  heading: string;
  subheading: string;
};

export function VentureBlock({ imagePath, heading, subheading }: TVentureBlockProps) {
  return (
    <VStack w='full' maxW={400}>
      <Image alt='val' src={imagePath || '/images/valuations/Featured icon (3).svg'} height={100} width={100} className='w-[60px] h-[60px]' />
      <Text fontWeight={500} fontSize={'1.3rem'}>
        {heading}
      </Text>
      <Text textAlign={'center'}>{subheading}</Text>
    </VStack>
  );
}
