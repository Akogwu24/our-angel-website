'use client';

import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

export const RecentLaunchCard = () => {
  return (
    <Stack w='full' bg='white' shadow='2px 2px 16px -14px rgba(0,0,0,0.66)' borderRadius={5} className='group overflow-hidden'>
      <Box className='overflow-hidden'>
        <Image
          width={200}
          height={100}
          className='h-[250px] rounded w-full object-cover group-hover:scale-125 ease-in-out duration-500'
          src='/images/home/car.svg'
          alt='opportunity'
        />
      </Box>
      <Box pos='relative' pl={5}>
        <Image width={20} height={10} className='w-[55px] absolute bottom-0' src='/images/home/company-logo.svg' alt='company-logo' />
      </Box>
      <Flex p={6} pt={0} justify={'space-between'}>
        <Box>
          <Text textStyle={'h3'} fontSize={24}>
            Measurabl
          </Text>
          <Text opacity={0.8} fontWeight={500} py={3}>
            Raised{' '}
            <Text as='span' color='themeLightBlue' fontWeight={600}>
              $50M
            </Text>{' '}
            · Jun 2023
          </Text>
          <Text fontWeight={500}>London, UK</Text>
        </Box>
        <Icon alignSelf={'flex-end'} as={BsArrowUpRight} color={'themeLightBlue'} fontSize={'1.5rem'} />
      </Flex>
    </Stack>
  );
};
