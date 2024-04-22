'use client';

import { Flex, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, SimpleGrid, Text } from '@chakra-ui/react';
import FeaturedToolCard from './FeaturedToolCard';
import { GetStartedVideo } from './GetStartedVideo';
import { featuredTools } from './extras';

export const ProductsPopOver = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Text cursor={'pointer'}>Products</Text>
      </PopoverTrigger>
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
    </Popover>
  );
};
