import { As, Box, Flex, Stack, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { PrimaryLightButton } from './CustomButtons';
import Image from 'next/image';
import { Icon } from 'iconsax-react';
import { IconType } from 'react-icons';

type THeroProps = {
  heading: string | ReactNode;
  subheading: string;
  imgPath: string;
  as?: As;
  rightIcon?: Icon | IconType | ReactNode;
  btnText?: string;
};
export default function Hero({ heading, subheading, imgPath, as, btnText, rightIcon }: THeroProps) {
  return (
    <Flex align='center' gap='2rem'>
      <Stack flex='1' maxW='500px'>
        <Box as={as || Text} textStyle='h1'>
          {heading}
        </Box>

        <Text>{subheading}</Text>

        <PrimaryLightButton h='45px' w='150px' mt={4} rightIcon={rightIcon}>
          {btnText || 'Get Started'}
        </PrimaryLightButton>
      </Stack>
      <Flex flex={1} pos={'relative'}>
        <Image className='p-32 pt-16 pr-0 pb-0 w-full' width={100} height={120} src={imgPath} objectFit='cover' alt='hero image' priority />
      </Flex>
    </Flex>
  );
}
