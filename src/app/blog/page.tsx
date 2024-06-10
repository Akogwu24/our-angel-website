import React from 'react';
import BlogHero from './components/BlogHero';
import { Box } from '@chakra-ui/react';
import BlogPosts from './components/BlogPosts';
import { PageWrapper } from '@/common/PageWrapper';
import FooterBlueTopType2 from '@/common/FooterBlueTopType2';

export default function BlogPage() {
  return (
    <Box as='main'>
      <BlogHero />
      <BlogPosts />
      <PageWrapper>
        <FooterBlueTopType2 />
      </PageWrapper>
    </Box>
  );
}
