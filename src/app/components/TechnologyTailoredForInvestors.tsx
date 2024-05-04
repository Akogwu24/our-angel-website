'use client';

import { PageWrapper } from '@/common/PageWrapper';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { technologyTailored } from './extras';
import ProgressbarLine from '@/common/ProgressbarLine';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const images = ['/images/home/tailored1.svg', '/images/home/tailored2.svg', '/images/home/tailored3.svg'];

export const TechnologyTailoredForInvestors = () => {
  const [startFill, setStartFill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartFill(startFill < 2 ? startFill + 1 : 0);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [startFill]);

  return (
    <PageWrapper>
      <Stack my={20}>
        <Text textStyle={'h2'} fontSize={'2.5rem'}>
          Technology Tailored for Investors
        </Text>
        <Flex h={550} my={5} justify={'space-between'} gap={'2rem'} align='center'>
          <Stack flex='1' maxW='650px' spacing={3}>
            {technologyTailored.map((item, i) => (
              <>
                <Box key={i} pt={3} opacity={startFill === i ? 1 : 0.4}>
                  <Text textStyle={'h3'} fontWeight={500} fontSize={'1.2rem'} lineHeight={2.4}>
                    {item.heading}
                  </Text>
                  <Text fontSize={15}>{item.subheading}</Text>
                </Box>
                <ProgressbarLine fillStart={startFill === i} />
              </>
            ))}
          </Stack>
          <Box pos={'relative'} h='full' flex={1}>
            <motion.img
              src={images[startFill] || '/images/home/Content2.svg'}
              alt='group'
              variants={imageVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              transition={{ duration: 2 }}
              key={images[startFill]}
            />
            {/* <Image fill src='/images/home/Content2.svg' alt='group' /> */}
          </Box>
        </Flex>
      </Stack>
    </PageWrapper>
  );
};
