'use client';

import {
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import FeaturedToolCard from './FeaturedToolCard';
import { GetStartedVideo } from './GetStartedVideo';
import { featuredTools, userTypeTools } from './extras';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { PageWrapper } from '../PageWrapper';

const tabStyles = { p: 0, border: 0, outline: 0 };

export const ProductsPopOver = () => {
  const pathname = usePathname();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onClose();
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Popover placement='bottom' isOpen={isOpen} onClose={onClose} closeOnBlur={true}>
        <PopoverTrigger>
          <Text onMouseOver={onOpen} cursor={'pointer'}>
            Products
          </Text>
        </PopoverTrigger>
        {/* <Portal> */}
        <PopoverContent mt={3} ml={['1%']} w={['98vw']} top={0} onMouseOver={onOpen} onMouseOut={onClose}>
          <PopoverCloseButton bg='gray.200' right='1' top={0} />
          {/* <PopoverArrow /> */}
          <PageWrapper pr={['1% !important']} pl={['0% !important']}>
            <PopoverBody as={Flex} gap='2rem' direction={['column', 'row']} border={'none'} outline={'none'}>
              <Tabs w='full' mt='1rem' variant='unstyled' orientation={'vertical'} direction='rtl'>
                <TabList gap={5} borderRight={'1px solid #eee'} pr={[0, 0, 0, 4]}>
                  <Text fontSize={13} color='gray.500'>
                    PRODUCTS
                  </Text>
                  {userTypeTools?.map((tool, i) => (
                    <Tab key={i} textAlign='start' {...tabStyles}>
                      <FeaturedToolCard p={2} tool={tool} w={['100%', '100%', '220px', '280px']} />
                    </Tab>
                  ))}
                </TabList>

                <Stack>
                  <Text pl={4} fontSize={13} color='gray.500'>
                    FEATURED TOOLS
                  </Text>

                  <TabPanels w='full'>
                    <TabPanel w='full'>
                      <Flex direction={['column', 'column', 'column', 'column', 'row']} w='100%'>
                        <SimpleGrid gap='2rem' columns={[2]}>
                          {featuredTools.map((tool, i) => (
                            <FeaturedToolCard key={i} tool={tool} />
                          ))}
                        </SimpleGrid>
                        <GetStartedVideo />
                      </Flex>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                      <p>three!</p>
                    </TabPanel>
                  </TabPanels>
                </Stack>
              </Tabs>
            </PopoverBody>
          </PageWrapper>
        </PopoverContent>
        {/* </Portal> */}
      </Popover>
    </>
  );
};
