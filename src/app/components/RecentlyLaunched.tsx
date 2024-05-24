import { OutlinedButton } from '@/common/CustomButtons';
import { Box, Flex, HStack, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import React from 'react';
import Image from 'next/image';
import { PageWrapper } from '@/common/PageWrapper';
import { fundManagerSlideImages, investorSlideImages, startupSlideImages, swappedImages, technologyTailored } from './extras';
import DiscoverOurServicesTabContent from './DiscoverOurServicesTabContent';
import { ProgressBottomBorderWithSwappingImages } from '@/common/ProgressBottomBorderWithSwappingImages';
import { RecentlyLunchedCarousel } from './RecentlyLunchedCarousel';

const paddingVal = ['10px'];

export const RecentlyLaunched = async () => {
  return (
    <Stack>
      <PageWrapper>
        <HStack justify={'space-between'} px={paddingVal}>
          <Text textStyle={'h2'}>Recently Launched </Text>
          <OutlinedButton display={['none', 'none', 'flex']} rightIcon={<ArrowRight />}>
            View
          </OutlinedButton>
          <OutlinedButton size='sm' display={['block', 'block', 'none']}>
            <ArrowRight size={18} />
          </OutlinedButton>
        </HStack>

        <RecentlyLunchedCarousel paddingVal={paddingVal} />

        <Flex my={20} gap='2rem' align={'center'} direction={['column', 'column', 'row']}>
          <Box h='full' flex={1}>
            <Image height={100} width={100} src='/images/home/Group.svg' alt='group' className='h-[400px] lg:h-[500px] w-full' />
          </Box>
          <Stack flex='1' maxW='600px'>
            <Text fontSize={15} color='gray.500'>
              Diversification of portfolio
            </Text>
            <Text textStyle={'h2'} fontSize={['1.8rem', null, '2rem', '2.5rem']} lineHeight={1.2}>
              Strategically Diversify <br /> Across Sectors and Stages
            </Text>
            <Text as='article'>
              Maximize your potential returns by diversifying your investments across multiple sectors and stages. From early-stage startups in the
              vibrant fintech world to established ventures in the rapidly evolving AI and biotech industries, OurAngels makes it easy to build a
              resilient and dynamic portfolio that balances risk and reward.
            </Text>
          </Stack>
        </Flex>
      </PageWrapper>

      <Box bg='#80AB821A' my={5}>
        <PageWrapper>
          <Flex my={10} py={5} px={[2, 5]} gap='2rem' align={'center'} direction={['column-reverse', 'column-reverse', 'row']}>
            <Stack flex='1' maxW={['full', 'full']}>
              <Text textStyle={'h2'} lineHeight={1.2}>
                Back Winning Teams: Invest Where It Counts
              </Text>
              <Text as='article'>
                Every startup on OurAngel undergoes a rigorous vetting process, ensuring you&apos;re investing in companies with not just
                groundbreaking ideas but also solid business models, strong teams, and the potential for substantial growth. Our comprehensive
                evaluation process means you&apos;re backing ventures ready to make an impact.
              </Text>
            </Stack>

            <Box h='full' flex={1}>
              <Image src='/images/home/back-winning-teams.svg' alt='group' height={100} width={100} className='h-full lg:h-[500px] w-full' />
            </Box>
          </Flex>
        </PageWrapper>
      </Box>
      <ProgressBottomBorderWithSwappingImages sectionHeading='Technology Tailored for Investors' data={technologyTailored} images={swappedImages} />

      <PageWrapper>
        <Stack my={[0, 10]} borderRadius={10} py={[5]} px={[2, 5, 10]} bg='#F3F2EE' align='center'>
          <Text textStyle={'h2'} fontWeight={500}>
            Discover Our Services
          </Text>
          <Text align='center' maxW='800px' as='article'>
            At Ourangels, we cater to a diverse community of startups, investors, and fund managers, offering specialized services to meet the unique
            needs of each. Explore what we can do for you:
          </Text>

          <Tabs variant='soft-rounded' w='full'>
            <TabList
              bg='#13213E'
              mx='auto'
              maxW={['350px', '360px', '380px']}
              justifyContent={['space-between']}
              borderRadius={24}
              color='white'
              h='50px'
              p={1.5}
              my={5}
            >
              <Tab {...tabStyles}>Startups</Tab>
              <Tab {...tabStyles}>Investors</Tab>
              <Tab {...tabStyles} w={'fit-content'}>
                Fund managers
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <DiscoverOurServicesTabContent
                  heading='Startup'
                  subheading='Manage equity, raise funds, access 409A valuations'
                  images={startupSlideImages || []}
                />
              </TabPanel>
              <TabPanel>
                <DiscoverOurServicesTabContent
                  heading='Investors'
                  subheading='Invest in startups, invest in funds, track investments'
                  images={investorSlideImages || []}
                />
              </TabPanel>
              <TabPanel>
                <DiscoverOurServicesTabContent
                  heading='Fund managers'
                  subheading='Raise funds from investors, invest in startups, manage limited partners'
                  images={fundManagerSlideImages || []}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </PageWrapper>
    </Stack>
  );
};

const tabStyles = {
  border: 0,
  fontWeight: '500',
  fontSize: [14, 15],
  px: [2, 3, 5],
  color: 'white',
  // flex: 1,
  // w: '100%',
  _selected: { color: '#333', bg: 'white', borderRadius: 20 },
};
