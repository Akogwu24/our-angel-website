import { PageWrapper } from '@/common/PageWrapper';
import { Box, Center, Circle, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { howItWorks } from './extras';

export function HowItWorks() {
  return (
    <PageWrapper>
      <Stack mb={20} mt={10}>
        <Text textStyle={'h2'} fontSize={'2.5rem'}>
          How It Works
        </Text>
        <Flex h={550} my={5} justify={'space-between'} gap={'2rem'} align='center'>
          <Stack flex='1' maxW='650px' spacing={10}>
            {howItWorks.map((item, i) => (
              <Flex align={'flex-start'} key={i} gap='1rem'>
                <Center shadow='sm' h='35px' w='35px' borderRadius={'50%'} border='1px solid #eee'>
                  {i + 1}
                </Center>
                <Box borderBottom={'1px #ddd solid'} pb={2}>
                  <Text textStyle={'h3'} fontWeight={500} fontSize={'1.2rem'}>
                    {item.heading}
                  </Text>
                  <Text fontSize={15}>{item.subheading}</Text>
                </Box>
              </Flex>
            ))}
          </Stack>
          <Box pos={'relative'} h='full' flex={1}>
            <Image fill src='/images/fund-management/Content (1).svg' alt='group' />
          </Box>
        </Flex>
      </Stack>
    </PageWrapper>
  );
}
