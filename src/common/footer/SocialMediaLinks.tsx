'use client';

import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function SocialMediaLinks() {
  return (
    <HStack gap='1rem' ml='auto'>
      <Icon as={FaXTwitter} fontSize={'1.2rem'} />
      <Icon as={FaLinkedin} fontSize={'1.2rem'} />
    </HStack>
  );
}
