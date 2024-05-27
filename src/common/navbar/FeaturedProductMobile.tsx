import { HStack, Icon, ListItem, Text } from '@chakra-ui/react';
import { ArrowRight, CloudFog } from 'iconsax-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

type TFeaturedProductMobile = {
  title: string;
  path?: string;
  onClose?: () => void;
};

export default function FeaturedProductMobile({ onClose, path, title }: TFeaturedProductMobile) {
  const { push } = useRouter();

  const handleNavigate = () => {
    push(path || '#');
    onClose && onClose();
  };

  return (
    <HStack
      onClick={handleNavigate}
      borderBottom='1px solid #eee'
      p={1}
      pt='3'
      pb={2}
      borderRadius={3}
      role='group'
      overflowX='hidden'
      transition={'all 600ms ease-in'}
      _hover={{ bg: 'gray.50' }}
    >
      <Text w='full'>{title}</Text>
      <Icon
        as={ArrowRight}
        fontSize={20}
        pos='relative'
        left={'40px'}
        opacity={0}
        _groupHover={{ left: 0, opacity: 1, transition: 'all 0.5s ease-in-out' }}
      />
    </HStack>
  );
}
