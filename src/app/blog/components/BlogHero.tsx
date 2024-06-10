import { PageWrapper } from '@/common/PageWrapper';
import { Avatar, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function BlogHero() {
  return (
    <Box as='section'>
      <PageWrapper>
        <Stack as='header' my={8}>
          <Text color='primary'>LEARN / BLOG</Text>
          <Text as='h1' fontSize={['1.8rem', '2rem', '2.2rem', '2.5rem', '3rem']} color='black' fontWeight={600}>
            Resources and insights
          </Text>
          <Text>The latest industry news, interviews, technologies, and resources.</Text>
        </Stack>
        <Box pos='relative' color='white' bg='black'>
          <Box borderRadius={10}>
            <Image
              alt='blog'
              width={100}
              height={100}
              src='/images/blog/hero.svg'
              className='h-[550px] sm:h-[500px] opacity-50 w-full object-cover rounded-2xl my-10'
            />
          </Box>
          <Stack spacing={5} pos='absolute' bottom={[4, 10]} left={0} w='full' px={'5%'}>
            <Text as='h4' lineHeight={[1, 1.1, 1.2]} fontWeight={600} textStyle={'h3'} color='white'>
              Improve your design skills: Develop an &quot;eye&quot; for design
            </Text>
            <Text fontWeight={500}>
              Tools and trends change, but good design is timeless. Learn how to quickly develop an &quot;eye&quot; for design.
            </Text>
            <Flex justify='space-between' w='full' direction={['column', 'column', 'row']}>
              <HStack gap={['1rem', '2rem']}>
                <Stack>
                  <Text as='small'>Written by</Text>
                  <HStack>
                    <Avatar src='https://media.licdn.com/dms/image/D4D03AQGs8Xrj1shnqA/profile-displayphoto-shrink_400_400/0/1714639871084?e=1723075200&v=beta&t=ykdvq-pmL9WBG40VrG3YD4AjgMS00i1a7PFlupgoUqA' />
                    <Text>Amélie Laurent</Text>
                  </HStack>
                </Stack>
                <Stack fontSize={[12]} spacing={[1]}>
                  <Text>Published on</Text>
                  <Text>10 April 2024</Text>
                </Stack>
              </HStack>

              <Stack fontSize={[12, 13, 14, 15]} fontWeight={500} mt={[2]}>
                <Text fontWeight={600}>File under</Text>
                <HStack wrap='wrap'>
                  <Text border='2px solid white' borderRadius={20} px='4' py='0.5'>
                    Design
                  </Text>
                  <Text border='2px solid white' borderRadius={20} px='4' py='0.5'>
                    Research
                  </Text>
                  <Text border='2px solid white' borderRadius={20} px='4' py='0.5'>
                    Presentation
                  </Text>
                </HStack>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </PageWrapper>
    </Box>
  );
}
