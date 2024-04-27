'use client';

import { DarkPrimaryButton } from '@/common/CustomButtons';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type TDiscoverOurServicesTabContent = {
  images: string[];
  heading: string;
  subheading: string;
};

export default function DiscoverOurServicesTabContent({ heading, images, subheading }: TDiscoverOurServicesTabContent) {
  console.log('images', images);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: '',
  };

  return (
    <Flex maxW='1000px' mx='auto' gap='2rem' h='300' align='center' justify='space-between'>
      <Stack flex='1'>
        <Text textStyle='h2'>{heading}</Text>
        <Text>{subheading}</Text>
        <DarkPrimaryButton mt={3} w={150}>
          Learn more
        </DarkPrimaryButton>
      </Stack>

      <Box flex='1' w='380' h='300' overflow={'hidden'}>
        <Slider {...settings}>
          {images?.map((img) => (
            <Flex key={img} mx='1rem'>
              <Image mx='1rem' objectFit={'cover'} w='full' h='full' alt='img' src={img} />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
}
