'use client';

import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Slider from 'react-slick';

type TSlickSliderCarouselProps = {
  children: ReactNode;
};

export default function SlickSliderCarousel({ children }: TSlickSliderCarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {children}
        {/* {[...Array(10)].map((slider, i) => (
          <Box bg='teal.300' m={5} w={200} h={200} key={i}>
            <h3>{i + 1}</h3>
          </Box>
        ))} */}
      </Slider>
    </div>
  );
}
