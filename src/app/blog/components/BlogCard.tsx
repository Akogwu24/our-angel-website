import { Avatar, HStack, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type TBlogCard = {
  image: string;
};

export function BlogCard({ blogs }: { blogs: TBlogCard }) {
  return (
    <Link href='/blog/1'>
      <Stack my={5} alignItems={'flex-start'} w='full'>
        <Image
          className='h-[200px] w-full object-cover rounded-xl'
          alt='post'
          src={blogs?.image || '/images/blog/hero1.svg'}
          height={100}
          width={100}
        />
        <Stack>
          <Text as='small'>Design</Text>
          <Text fontSize={18} fontWeight={600}>
            UX review presentations
          </Text>
          <Text fontSize={14}>How do you create compelling presentations that wow your colleagues and impress your managers?</Text>
          <HStack>
            <Avatar src='https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' />
            <Text fontSize={15} fontWeight={500} color='black'>
              Lavani Greg
            </Text>
          </HStack>
        </Stack>
      </Stack>
    </Link>
  );
}
