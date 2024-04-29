import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { PrimaryLightButton } from './CustomButtons';
import Image from 'next/image';
import { ArrowRight } from 'iconsax-react';

type TFooterBlueTopProps = {
  heading: string;
  subheading: string;
  buttonText: string;
};

export const FooterBlueTop = ({ heading, subheading, buttonText }: Partial<TFooterBlueTopProps>) => {
  return (
    <HStack bg='extremethemeDarkBlue' pl={5} h={[350]} color='white' my={10}>
      <Stack flex='1' ml={'10%'} maxW='600px'>
        <Text textStyle={'h2'} fontSize={['2.5rem']} lineHeight={1.2} color='white'>
          {heading}
        </Text>
        <Text>{subheading}</Text>
        <PrimaryLightButton rightIcon={<ArrowRight size={20} />} w={150} fontWeight='500' mt={3} color='themeDarkBlue' bg='white'>
          {buttonText || 'Start investing'}
        </PrimaryLightButton>
      </Stack>

      <Image className='h-[350px] flex-1' alt='Build With OurAngel' width={200} height={200} src='/images/startups/Line (1).png' />
    </HStack>
  );
};
