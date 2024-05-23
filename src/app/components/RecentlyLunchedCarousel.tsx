'use client';

import React from 'react';
import Slider from 'react-slick';
import { RecentLaunchCard } from './RecentLaunchCard';
import { Flex } from '@chakra-ui/react';

type TRecentlyLunchedCarousel = {
  paddingVal: string[];
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  cssEase: 'linear',
  pauseOnHover: true,

  responsive: [
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export function RecentlyLunchedCarousel({ paddingVal }: TRecentlyLunchedCarousel) {
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {[...Array(10)].map((slide, i) => (
          <Flex px={paddingVal} py={4} key={i}>
            <RecentLaunchCard />
          </Flex>
        ))}
      </Slider>
    </div>
  );
}
