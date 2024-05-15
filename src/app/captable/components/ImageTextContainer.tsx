import { Box, Flex, ResponsiveArray, ResponsiveValue, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type TImageTextContainerProps = {
  subheading: string;
  heading: string;
  body: string | ReactNode;
  imageUrl: string;
  order?: number;
  direction?: ResponsiveValue<'column' | 'row' | 'column-reverse' | 'row-reverse'> | undefined;
};

export const ImageTextContainer = ({ body, heading, subheading, imageUrl, order, direction }: TImageTextContainerProps) => {
  return (
    <Flex gap={'2rem'} align={'center'} justify={'space-between'} direction={direction}>
      <Stack flex='1' order={order}>
        <Text color='gray.400' fontSize={18}>
          {subheading || 'Automated cap table software'}{' '}
        </Text>
        <Text textStyle='h2'>{heading || 'Automated Cap Table Management:'} </Text>
        <Box>
          {body ||
            'OurAngels offers a sophisticated platform that automates cap table management processes, eliminating the need for manual calculations and spreadsheet errors. This streamlines the entire process and ensures accuracy in tracking ownership and equity distribution.'}
        </Box>
      </Stack>
      <Box flex={1}>
        <Image alt='...' src={imageUrl} width={100} height={100} className='w-full h-[450px]' />
      </Box>
    </Flex>
  );
};
