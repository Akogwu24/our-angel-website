'use client';

import { Center, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { RxLink2 } from 'react-icons/rx';
import { FaFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io';

export default function TableOfContent() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 2200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack as='aside' className={`w-1/4 hidden xl:block  max-w-[250px] ${isScrolled ? 'invisible' : 'visible'} fixed top-40 left-5 rounded p-4`}>
      <Text as='h3' color={'themeDarkBlue'} mb='1rem' fontSize={17} fontWeight={600}>
        Table of contents
      </Text>
      <Stack as='ul' spacing={3}>
        <Text as={Link} href='#'>
          Introduction
        </Text>
        <Text>Software and tools</Text>
        <Text>Other resources</Text>
        <Text>Conclusion</Text>
      </Stack>
      <HStack borderTop={'1px solid #ddd'} py={5} mt={3}>
        <Center w='30px' h='30px' opacity={0.5} border='1px solid #ccc' borderRadius={5}>
          <Icon as={RxLink2} />
        </Center>
        <Center w='30px' h='30px' opacity={0.5} border='1px solid #ccc' borderRadius={5}>
          <Icon as={BsTwitterX} />
        </Center>
        <Center w='30px' h='30px' opacity={0.5} border='1px solid #ccc' borderRadius={5}>
          <Icon as={FaFacebook} />
        </Center>
        <Center w='30px' h='30px' opacity={0.5} border='1px solid #ccc' borderRadius={5}>
          <Icon as={IoLogoLinkedin} />
        </Center>
      </HStack>
    </Stack>
  );
}
