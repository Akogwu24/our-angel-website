import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type TInvestWitInsightCardProps = {
  heading: string;
  subheading: string;
  imagePath: string;
};

export function InvestWitInsightCard({ heading, subheading, imagePath }: TInvestWitInsightCardProps) {
  return (
    <Stack p={5} bg='rgba(250, 250, 250, 0.1)' borderRadius={8} shadow='sm'>
      <Image className='w-[50px] h-[50px]' src={imagePath || '/images/startups/Featured icon (1).svg'} alt='invest with insight' width={20} height={20} />
      <Text textStyle='h3' fontWeight={600} color='white' fontSize={'1.2rem'}>
        {heading || 'Technological Edge'}
      </Text>
      <Text fontSize={15}>{subheading}</Text>
    </Stack>
  );
}
