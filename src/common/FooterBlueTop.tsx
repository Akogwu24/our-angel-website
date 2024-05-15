import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { PrimaryLightButton } from './CustomButtons';
import Image from 'next/image';
import { ArrowRight } from 'iconsax-react';

type TFooterBlueTopProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  h?: number[];
};

export const FooterBlueTop = ({ heading, subheading, buttonText, h }: Partial<TFooterBlueTopProps>) => {
  return (
    <HStack bg='extremethemeDarkBlue' pl={5} h={h || [380, 400, 350, 320]} color='white' my={10} py={['5', 0]}>
      <Stack flex='1' ml={[0, '3%', '10%']} maxW='600px'>
        <Text textStyle={'h2'} fontSize={['2.5rem']} lineHeight={1.2} color='white'>
          {heading}
        </Text>
        <Text>{subheading}</Text>
        <PrimaryLightButton rightIcon={<ArrowRight size={20} />} w={150} fontWeight='500' mt={3} color='themeDarkBlue' bg='white'>
          {buttonText || 'Start investing'}
        </PrimaryLightButton>
      </Stack>

      <Image
        className='h-full lg:h-[350px] hidden sm:block flex-1'
        alt='Build With OurAngel'
        width={200}
        height={200}
        src='/images/startups/Line (1).png'
      />
    </HStack>
  );
};
