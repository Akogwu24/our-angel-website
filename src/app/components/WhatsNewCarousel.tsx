'use client';

import React from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import { WhatsNewCard } from '@/common/WhatsNewCard';

type TWhatsNewCarousel = {
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
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export function WhatsNewCarousel({ paddingVal }: TWhatsNewCarousel) {
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <Box px={paddingVal}>
          <WhatsNewCard
            image='/images/home/what-new1.png'
            heading='Make everyday a payday'
            subheading='Collaboration can make our teams stronger, and our individual designs better.'
          />
        </Box>
        <Box px={paddingVal}>
          <WhatsNewCard
            image='/images/home/what-new2.png'
            heading='Announcing our $10m series'
            subheading='JavaScript frameworks make development easy with extensive features and functionalities.'
          />
        </Box>
        <Box px={paddingVal}>
          <WhatsNewCard
            image='/images/home/what-new3.png'
            heading='Creating a better CX Community'
            subheading='Starting a community doesn’t need to be complicated, but how do you get started?'
          />
        </Box>
      </Slider>
    </div>
  );
}
