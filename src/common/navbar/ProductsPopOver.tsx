'use client';

import {
  Flex,
  Popover,
  PopoverBody,
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
import { featuredTools, fundManagersFeaturedTools, investorsFeaturedTools, userTypeTools } from './extras';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PageWrapper } from '../PageWrapper';
import { CustomNavLink } from '../CustomNavLink';

const tabStyles = { p: 0, border: 0, outline: 0 };

export const ProductsPopOver = () => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState(0);
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
        <PopoverContent className='no-border' mt={3} w={['100vw']} top={0} onMouseOver={onOpen} onMouseOut={onClose}>
          <PageWrapper pr={['1% !important']} pl={['0% !important']}>
            <PopoverBody as={Flex} gap='2rem' direction={['column', 'row']} border={'none'} outline={'none'}>
              <Tabs w='full' mt='1rem' variant='unstyled' orientation={'vertical'} direction='rtl' onChange={setCurrentTab}>
                <TabList gap={5} borderRight={'1px solid #eee'} pr={[0, 0, 0, 4]}>
                  <Text fontSize={13} color='gray.500'>
                    PRODUCTS
                  </Text>
                  {userTypeTools?.map((tool, i) => (
                    <Tab key={i} textAlign='start' {...tabStyles}>
                      <CustomNavLink key={i} tool={tool} active={currentTab == i} />
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
                      <Flex direction={['column', 'column', 'column', 'column', 'row']} w='100%'>
                        <SimpleGrid alignItems={'flex-start'} rowGap={'0rem'} gap='2rem' columns={[2]}>
                          {investorsFeaturedTools.map((tool, i) => (
                            <FeaturedToolCard key={i} tool={tool} />
                          ))}
                        </SimpleGrid>
                        <GetStartedVideo />
                      </Flex>
                    </TabPanel>
                    <TabPanel>
                      <Flex direction={['column', 'column', 'column', 'column', 'row']} w='100%'>
                        <SimpleGrid alignItems={'flex-start'} rowGap={'0rem'} gap='2rem' columns={[2]}>
                          {fundManagersFeaturedTools.map((tool, i) => (
                            <FeaturedToolCard key={i} tool={tool} />
                          ))}
                        </SimpleGrid>
                        <GetStartedVideo />
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Stack>
              </Tabs>
            </PopoverBody>
          </PageWrapper>
        </PopoverContent>{' '}
      </Popover>
    </>
  );
};
