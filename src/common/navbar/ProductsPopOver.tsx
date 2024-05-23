'use client';

import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
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

const tabStyles = { p: 0, border: 0, outline: 0 };

export const ProductsPopOver = () => {
  const pathname = usePathname();
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Popover placement='bottom' isOpen={isOpen} onClose={onClose} closeOnBlur={false}>
        <PopoverTrigger>
          <Text onClick={onToggle} cursor={'pointer'}>
            Products
          </Text>
        </PopoverTrigger>
        {/* <Portal> */}
        <PopoverContent mt={3} ml={['1%']} w={['98vw']} top={-14}>
          <PopoverCloseButton right='0' top={0} />
          {/* <PopoverArrow /> */}
          <PopoverBody as={Flex} gap='2rem' direction={['column', 'row']} border={'none'} outline={'none'}>
            <Tabs mt='1rem' variant='unstyled' orientation={'vertical'} direction='rtl'>
              <TabList gap={5} borderRight={'1px solid #eee'} pr={[0, 4]}>
                <Text fontSize={13} color='gray.500'>
                  PRODUCTS
                </Text>
                {userTypeTools?.map((tool, i) => (
                  <Tab key={i} textAlign='start' {...tabStyles}>
                    <FeaturedToolCard p={2} tool={tool} />
                  </Tab>
                ))}
              </TabList>

              <Stack>
                <Text pl={4} fontSize={13} color='gray.500'>
                  FEATURED TOOLS
                </Text>

                <TabPanels>
                  <TabPanel>
                    <Flex wrap='wrap'>
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

            {/* <SimpleGrid gap='2rem' columns={[3]}>
              {featuredTools.map((tool, i) => (
                <FeaturedToolCard key={i} tool={tool} />
              ))}
            </SimpleGrid>
            <GetStartedVideo /> */}
          </PopoverBody>
        </PopoverContent>
        {/* </Portal> */}
      </Popover>
    </>
  );
};
