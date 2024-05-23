'use client';

import React, { useEffect, useState } from 'react';
import { PageWrapper } from './PageWrapper';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import ProgressbarLine from './ProgressbarLine';
import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// const images = ['/images/home/tailored1.svg', '/images/home/tailored2.svg', '/images/home/tailored3.svg'];

type TProgressBottomBorderWithSwappingImagesProps = {
  data: datum[];
  sectionHeading: string;
  images: string[];
};

type datum = {
  heading: string;
  subheading: string;
  img?: string;
  styleType: string | undefined;
};

export function ProgressBottomBorderWithSwappingImages({ images, data, sectionHeading }: TProgressBottomBorderWithSwappingImagesProps) {
  const [startFill, setStartFill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartFill(startFill < data?.length - 1 ? startFill + 1 : 0);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [startFill, data?.length]);

  return (
    <PageWrapper>
      <Stack my={20}>
        <Text textStyle={'h2'}>{sectionHeading || 'Technology Tailored for Investors'}</Text>
        <Flex mb={5} justify={'space-between'} gap={'5rem'} align='center' direction={['column', 'column', 'column', 'row']}>
          <Stack flex='1' maxW='650px' spacing={3}>
            {data.map((item, i) => (
              <Flex key={i} align={'center'} gap='1rem'>
                {item?.styleType === 'number' && (
                  <Center shadow='sm' h='35px' w='35px' borderRadius={'50%'} border='1px solid #eee'>
                    {i + 1}
                  </Center>
                )}

                {item?.styleType === 'image' && (
                  <Image className='h-[45px] w-[45px]' width={20} height={20} objectFit='cover' alt={item?.img as string} src={item?.img as string} />
                )}

                <Stack w='full'>
                  <Box key={i} pt={3} opacity={startFill === i ? 1 : 0.4}>
                    <Text textStyle={'h3'} fontWeight={500} fontSize={['1.2rem']} my={2}>
                      {item.heading}
                    </Text>
                    <Text fontSize={15}>{item.subheading}</Text>
                  </Box>
                  <ProgressbarLine fillStart={startFill === i} />
                </Stack>
              </Flex>
            ))}
          </Stack>
          <Box pos={'relative'} maxH='full' flex={1} h={[500]}>
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
          </Box>
        </Flex>
      </Stack>
    </PageWrapper>
  );
}
