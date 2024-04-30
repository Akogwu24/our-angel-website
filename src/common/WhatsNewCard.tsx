import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type WhatsNewCard = {
  image: string;
  heading: string;
  subheading: string;
};
export function WhatsNewCard({ heading, image, subheading }: WhatsNewCard) {
  return (
    <Stack>
      <Image className='w-full object-cover' height={200} width={250} src={image || '/images/home/what-new1.png'} alt='what new on our angel' />
      <Text textStyle={'h3'} fontWeight={500} fontSize={'1.3rem'}>
        {heading || 'Make everyday a payday'}
      </Text>
      <Text>{subheading || 'Collaboration can make our teams stronger, and our individual designs better.'}</Text>
    </Stack>
  );
}
