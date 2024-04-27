'use client';

import { Flex, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Portal, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import FeaturedToolCard from './FeaturedToolCard';
import { GetStartedVideo } from './GetStartedVideo';
import { featuredTools } from './extras';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ProductsPopOver = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Text cursor={'pointer'}>Products</Text>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w='100%'>
          <PopoverCloseButton />

          <PopoverBody as={Flex} gap='2rem' direction={['column', 'row']} outline={'none'}>
            <SimpleGrid gap='2rem' columns={[3]}>
              {featuredTools.map((tool, i) => (
                <FeaturedToolCard key={i} tool={tool} />
              ))}
            </SimpleGrid>
            <GetStartedVideo />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
