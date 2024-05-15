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
    <Flex align={[null, null, 'center']} gap='2rem' direction={['column', 'column', 'row']}>
      <Stack flex='1' maxW='500px'>
        <Box as={as || Text} textStyle='h1' fontSize={['2.3rem', '2.5rem']}>
          {heading}
        </Box>

        <Text color='themeDarkBlue'>{subheading}</Text>

        <PrimaryLightButton h='45px' w='150px' mt={4} rightIcon={rightIcon}>
          {btnText || 'Get Started'}
        </PrimaryLightButton>
      </Stack>
      <Flex flex={1} pos={'relative'}>
        <Image
          className='p-0  pt-6 lg:pt-16  pr-0 pb-0 w-full max-h-[700px]'
          width={100}
          height={120}
          src={imgPath}
          objectFit='cover'
          alt='hero image'
          priority
        />
      </Flex>
    </Flex>
  );
}
