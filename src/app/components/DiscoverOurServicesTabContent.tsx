'use client';

import { DarkPrimaryButton } from '@/common/CustomButtons';
import { Box, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

type TDiscoverOurServicesTabContent = {
  images: string[];
  heading: string;
  subheading: string;
};

export default function DiscoverOurServicesTabContent({ heading, images, subheading }: TDiscoverOurServicesTabContent) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
  };

  return (
    <Flex maxW='1000px' w='full' mx='auto' gap={[0, '2rem']} h={[450, '300']} align='center' justify='space-between' direction={['column', 'row']}>
      <Stack flex='1'>
        <Text textStyle='h2'>{heading}</Text>
        <Text>{subheading}</Text>
        <DarkPrimaryButton mt={3} w={150}>
          Learn more
        </DarkPrimaryButton>
      </Stack>

      <Box flex='1' w={['300px', '380px']} pos={'relative'} overflow={'hidden'}>
        <Slider {...settings}>
          {images?.map((img) => (
            <Flex key={img}>
              <Image objectFit={'cover'} w='full' h='full' alt='img' src={img} />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
