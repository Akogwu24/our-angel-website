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
      <Text>{badgeText}</Text>
      <Image fill src={imgPath} objectFit='cover' alt='protfolio' />
    </Box>
  );
}
