import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react';

type TWhatWeDoCardProps = {
  head: string;
  subheading: string;
  img: string;
};

export function AllInOneSolutionCard({ head, img, subheading }: TWhatWeDoCardProps) {
  return (
    <Stack p={3} align={'center'} shadow='sm' w={'full'}>
      <Image src={img} width={40} height={40} alt='...' className='h-[55px] w-[55px]' />
      <Text textStyle={'h3'} fontSize={'1.1rem'} fontWeight={500}>
        {head}
      </Text>
      <Text fontSize={15} align='center'>
        {subheading}
      </Text>
    </Stack>
  );
}
