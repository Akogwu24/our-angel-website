'use client';

import { Icon } from '@chakra-ui/icon';
import { Flex, HStack, Text, Stack } from '@chakra-ui/layout';
import { PlayCircle } from 'iconsax-react';
import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

export function GetStartedVideo() {
  const videoRef = useRef(null);
  // useEffect(() => {
  //   // Add event listener to play video when it's ready
  //   videoRef.current?.addEventListener('loadeddata', () => {
  //     videoRef.current?.play();
  //   });

  //   return () => {
  //     // Cleanup: Remove event listener when component unmounts
  //     videoRef.current?.removeEventListener('loadeddata', () => {
  //       videoRef.current?.play();
  //     });
  //   };
  // }, []);

  return (
    <Flex
      direction={['row', 'row', 'row', 'row', 'column']}
      w={['100%', '100%', '100%', '100%', '200px']}
      maxW={['600']}
      columnGap={['1rem']}
      mx={[0, 0, 0, 4]}
      mt={[5, 5, 5, 5, 0]}
    >
      <iframe
        className='w-full flex-1 max-w-[250px]'
        src='https://www.youtube.com/embed/8Ij7A1VCB7I?si=uXJbOSx7It3bRJT_'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        // referrerpolicy='strict-origin-when-cross-origin'
        // allowfullscreen
      ></iframe>
      <Stack flex='1'>
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
      </Stack>
      {/* <ReactPlayer
        // controls={true}
        ref={videoRef}
        playIcon={<PlayCircle />}
        light={true}
        width={'100%'}
        height={'230px'}
        url={'https:www.youtube.com/watch?v=8Ij7A1VCB7I'}
      />
      <HStack color='rebeccapurple' pt={4} onClick={() => videoRef?.current?.play()}>
        <Icon as={PlayCircle} />
        <Text as='small'>Watch video</Text>
      </HStack> */}
      {/* <video ref={videoRef} width='100' height='100' controls>
        <source src='https:www.youtube.com/watch?v=8Ij7A1VCB7I' type='video/mp4' />
        Your browser does not support the video tag.
      </video> */}
    </Flex>
  );
}
