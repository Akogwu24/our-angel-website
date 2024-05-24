'use client';

import { PUBLIC_ROUTES } from '@/constants/routes';
import { Box, HStack, Icon as ChakraIcon, Text, IconProps, position } from '@chakra-ui/react';
import { ArrowRight, Icon } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';
import { IoRocketOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

type TFeaturedToolCardProps = {
  title: string;
  subtitle: string;
  icon: Icon | IconType;
  path?: string;
};

export default function FeaturedToolCard({ tool, p, w }: { w?: string[]; p?: number; tool: TFeaturedToolCardProps }) {
  return (
    <HStack
      as={Link}
      href={tool?.path || '#'}
      gap='0.5rem'
      w={w || '100%'}
      minW={200}
      maxW={280}
      p={2}
      py={p || 2}
      transition={'all 600ms ease-in'}
      borderRadius={4}
      _hover={{ bg: 'gray.100' }}
      role='group'
      overflowX='hidden'
      align='start'
    >
      <ChakraIcon boxSize={'6'} borderRadius={4} p='4px' as={tool?.icon || IoRocketOutline} bg='blue.50' />
      <Box>
        <Text fontWeight={500}>{tool?.title}</Text>
        <Text fontSize={13} fontWeight={400}>
          {tool?.subtitle}
        </Text>
      </Box>
      <ChakraIcon
        alignSelf={'center'}
        ml='auto'
        as={ArrowRight}
        boxSize={5}
        pos='relative'
        left={'40px'}
        opacity={0}
        _groupHover={{ left: 0, opacity: 1, transition: 'all 0.8s ease-in-out' }}
      />
    </HStack>
  );
}
