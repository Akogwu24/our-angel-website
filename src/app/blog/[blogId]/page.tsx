import { Avatar, Box, Flex, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { PageWrapper } from '@/common/PageWrapper';
import FooterBlueTopType2 from '@/common/FooterBlueTopType2';
import TableOfContent from './components/TableOfContent';

export default function page() {
  return (
    <>
      <Flex p={5}>
        <TableOfContent />

        <Stack mx='auto' maxW='800px' py={10}>
          <Text textStyle={'h1'} as='h1'>
            Migrating to Linear 101
          </Text>
          <Text>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</Text>
          <Image
            className='h-[300px] sm:h-[350px] lg:h-[400px] my-10 shadow-sm w-full object-cover'
            src='/images/blog/single-blog-hero.svg'
            width={200}
            height={100}
            alt='hero'
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu
            dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
          </Text>

          <Stack as='section' mt={10} borderTop={'1px solid #eee'} py={10}>
            <Text fontSize={32} fontWeight={600} color='black' as='h2'>
              Introduction
            </Text>
            <Text as='article'>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
              montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
              varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
              fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
              molestie aliquet sodales id est ac volutpat.{' '}
            </Text>
            <Box as='figure'>
              <Image
                className='h-[400px] mt-10  shadow-sm w-full rounded object-cover'
                src='/images/blog/article-image.svg'
                width={200}
                height={100}
                alt='article'
              />
              <Text as='figcaption' fontSize={12} my={2}>
                Image courtesy of Vlada Karpovich via Pexels
              </Text>
            </Box>
          </Stack>

          <Stack as='section'>
            <Text as='article'>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum
              molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
              nibh orci.
            </Text>

            <Text as='h3' fontStyle={'italic'} fontSize={18} fontWeight={600} color='black' align='center' mx='auto' mt={10}>
              “In a world older and more complete than ours they move finished <br /> and complete, gifted with extensions of the senses we have lost
              or <br /> never attained, living by voices we shall never hear.”
            </Text>
            <VStack mb={5} py={5}>
              <Avatar src='https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' />
              <Text color='#000' fontSize={18} fontWeight={500}>
                Olivia Rhye
              </Text>
              <Text as='small' fontSize={14}>
                Designer
              </Text>
            </VStack>
            <Text as='article'>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
              turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
              imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat
              auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
              Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit
              mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
              sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
            </Text>
          </Stack>

          <Stack as='section' py={10} my={5}>
            <Text as='h3' fontWeight={600} color='black' fontSize={32}>
              Other resources
            </Text>
            <Text>
              Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
              rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa
              erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis. Lectus id duis vitae porttitor enim
              gravida morbi. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat. Suspendisse maecenas
              ac donec scelerisque diam sed est duis purus.
            </Text>

            <Box as='figure'>
              <Image
                className='h-[400px] mt-10 shadow-sm w-full object-cover'
                src='/images/blog/article-image2.svg'
                width={200}
                height={100}
                alt='article'
              />
              <Text as='figcaption' fontSize={12}>
                Image courtesy of Jasmin Chew via Pexels
              </Text>
            </Box>
            <Text as='article' mt={10}>
              Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum in
              non. Pretium ultricies tempor non est diam. Enim ut enim amet amet integer cursus. Sit ac commodo pretium sed etiam turpis suspendisse
              at. Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
              Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus
              molestie pellentesque. Arcu ultricies sed mauris vestibulum.
            </Text>
          </Stack>

          <Stack as='section'>
            <Text as='h3' fontWeight={600} color='black' fontSize={32}>
              Conclusion{' '}
            </Text>
            <Text as='section'>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse. Nunc sed faucibus bibendum
              feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in
              nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
            </Text>
          </Stack>

          <Stack as='section'>
            <Text as='h3'>Other resources </Text>
            <Text as='section'>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse. Nunc sed faucibus bibendum
              feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in
              nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
            </Text>
          </Stack>
        </Stack>
      </Flex>

      <PageWrapper>
        <SimpleGrid gap='2rem' py={10} minChildWidth={220}>
          <BlogCard blogs={{ image: '' }} />
          <BlogCard blogs={{ image: '' }} />
          <BlogCard blogs={{ image: '' }} />
        </SimpleGrid>
        <FooterBlueTopType2 />
      </PageWrapper>
    </>
  );
}
