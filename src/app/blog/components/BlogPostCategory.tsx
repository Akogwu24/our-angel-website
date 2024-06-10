'use client';

import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { blogCategories } from './extras';
import useQueryParams from '@/hooks/useQueryParams';

export default function BlogPostCategory() {
  const { queryParams, setQueryParam } = useQueryParams();

  return (
    <HStack flex='1' gap='1rem' minW='300px' maxW='750px' overflowX={'auto'} mb='5' pb={4}>
      {blogCategories.map((category, i) => (
        <Text
          onClick={() => setQueryParam('category', category.name)}
          minW='fit-content'
          as='span'
          key={i}
          fontSize={14}
          border={`1px solid ${category.name === queryParams.get('category') ? 'themeDarkBlue' : ''}`}
          fontWeight={500}
          borderRadius={20}
          py='4px'
          px='4'
          bg={category.name === queryParams.get('category') ? 'themeDarkBlue' : ''}
          color={category.name === queryParams.get('category') ? 'white' : 'black'}
        >
          {category.name}
        </Text>
      ))}
    </HStack>
  );
}
