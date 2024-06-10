'use client';

import { PageWrapper } from '@/common/PageWrapper';
import { Box, Flex, Select, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { blogs } from './extras';
import { BlogCard } from './BlogCard';
import { CustomPangintor } from '@/common/CustomPangintor';
import BlogPostCategory from './BlogPostCategory';

export default function BlogPosts() {
  const [length, setLength] = useState(12);

  const windowSize = useBreakpointValue({
    base: 'base',
    sm: 'smallScreen',
    md: 'mediumScreen',
    lg: 'largeScreen',
    xl: 'xLargeScreen',
  });

  useEffect(() => {
    if (windowSize === 'base') {
      setLength(3);
    } else if (windowSize === 'smallScreen') {
      setLength(6);
    } else if (windowSize === 'mediumScreen') {
      setLength(6);
    }
  }, [windowSize]);

  console.log('windowSize', windowSize);

  return (
    <Box py={10}>
      <PageWrapper>
        <Flex
          gap='2rem'
          justify={'space-between'}
          wrap='wrap'
          //  direction={['column', 'column', 'row']}
        >
          <BlogPostCategory />
          <Select maxW='200' h={38} _focus={{ border: 'none', outline: 'none' }}>
            <option>Most Recent</option>
            <option>Last week</option>
            <option>Last Month</option>
          </Select>
        </Flex>

        <SimpleGrid my={8} pb={5} gap='2rem' columns={[1, 1, 2, 3]} borderBottom='1px solid #eee'>
          {[...blogs, ...blogs, ...blogs].map((blogs, i) => (
            <BlogCard key={i} blogs={blogs} />
          ))}
        </SimpleGrid>
        <CustomPangintor />
      </PageWrapper>
    </Box>
  );
}
