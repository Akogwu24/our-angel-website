'use client';

import { Icon } from '@chakra-ui/icon';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { PlayCircle } from 'iconsax-react';
import React, { useEffect, useRef } from 'react';

export function GetStartedVideo() {
  //   const videoRef = useRef(null);
  //   useEffect(() => {
  //     const video = videoRef.current;

  //     // Add event listener to play video when it's ready
  //     video?.addEventListener('loadeddata', () => {
  //       video?.play();
  //     });

  //     return () => {
  //       // Cleanup: Remove event listener when component unmounts
  //       video?.removeEventListener('loadeddata', () => {
  //         video?.play();
  //       });
  //     };
  //   }, []);

  return (
    <Box w='200px'>
      <iframe
        width={'100%'}
        src='https://www.youtube.com/embed/8Ij7A1VCB7I?si=uXJbOSx7It3bRJT_'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        // referrerpolicy='strict-origin-when-cross-origin'
        // allowfullscreen
      ></iframe>
      <Text py='1' fontWeight={600}>
        How to get started
      </Text>
      <Text fontWeight={400} fontSize={12}>
        Jump right in — get an overview of the basics and get started on building straight away.
      </Text>
      <HStack color='rebeccapurple' pt={4}>
        <Icon as={PlayCircle} />
        <Text as='small'>Watch video</Text>
      </HStack>

      {/* // <video ref={videoRef} width='100' height='100' controls>
    //   <source src='https://www.youtube.com/watch?v=8Ij7A1VCB7I' type='video/mp4' />
    //   Your browser does not support the video tag.
    // </video> */}
    </Box>
  );
}
