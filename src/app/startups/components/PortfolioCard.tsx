import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

type TPortfolioCardProps = {
  badgeText: string;
  imgPath: string;
};

export function PortfolioCard({ badgeText, imgPath }: TPortfolioCardProps) {
  return (
    <Box pos='relative' w='100%' h='330'>
      <Text
        pos='absolute'
        top={4}
        left={2}
        bg='white'
        color='black'
        fontSize={'13px'}
        py={'3px'}
        px={4}
        borderRadius={15}
        fontWeight={500}
        zIndex={1}
      >
        {badgeText}
      </Text>
      <Image fill src={imgPath} objectFit='cover' alt='protfolio' />
    </Box>
  );
}
