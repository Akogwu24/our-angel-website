import { useEffect, useState } from 'react';
import { HStack, Text, Icon as ChakraIcon, Box } from '@chakra-ui/react';
import { ArrowRight, Icon } from 'iconsax-react';
import { IconType } from 'react-icons';
import { IoRocketOutline } from 'react-icons/io5';

type TCustomNavLinkProps = {
  tool: {
    title: string;
    subtitle: string;
    icon: Icon | IconType;
    path?: string;
  };
  active: boolean;
};

export const CustomNavLink = ({ tool, active }: TCustomNavLinkProps) => {
  return (
    <HStack
      className={active ? 'active-link' : ''}
      minW={200}
      maxW={280}
      p={2}
      py={2}
      transition={'all 600ms ease-in'}
      borderRadius={4}
      _hover={{ bg: 'gray.100' }}
      role='group'
      overflowX='hidden'
      align='start'
    >
      <ChakraIcon as={tool?.icon || IoRocketOutline} boxSize={'6'} borderRadius={4} p='4px' bg='#F3F4F6' />
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
};
