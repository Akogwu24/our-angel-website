import { OutlinedButton } from '@/common/CustomButtons';
import { Box, Flex, HStack, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { ArrowRight } from 'iconsax-react';
import React from 'react';
import { RecentLaunchCard } from './RecentLaunchCard';
import Image from 'next/image';
import { PageWrapper } from '@/common/PageWrapper';
import { fundManagerSlideImages, investorSlideImages, startupSlideImages, technologyTailored } from './extras';
import DiscoverOurServicesTabContent from './DiscoverOurServicesTabContent';
import ProgressbarLine from '@/common/ProgressbarLine';
import { TechnologyTailoredForInvestors } from './TechnologyTailoredForInvestors';

export const RecentlyLaunched = async () => {
  return (
    <Stack>
      <PageWrapper>
        <HStack justify={'space-between'}>
          <Text textStyle={'h2'}>Recently Launched </Text>
          <OutlinedButton rightIcon={<ArrowRight />}>View</OutlinedButton>
        </HStack>
        <SimpleGrid columns={[3]} gap='2rem' my={4}>
          {[...Array(3)].map((item, i) => (
            <RecentLaunchCard key={i} />
          ))}
        </SimpleGrid>

        <Flex my={20} h={500} align={'center'}>
          <Box pos={'relative'} h='full' flex={1}>
            <Image fill src='/images/home/Group.svg' alt='group' />
          </Box>
          <Stack flex='1' maxW='600px'>
            <Text fontSize={15} color='gray.500'>
              Diversification of portfolio
            </Text>
            <Text textStyle={'h2'} fontSize={'2.5rem'} lineHeight={1.2}>
              Strategically Diversify <br /> Across Sectors and Stages
            </Text>
            <Text>
              Maximize your potential returns by diversifying your investments across multiple sectors and stages. From early-stage startups in the vibrant fintech world
              to established ventures in the rapidly evolving AI and biotech industries, OurAngels makes it easy to build a resilient and dynamic portfolio that balances
              risk and reward.
            </Text>
          </Stack>
        </Flex>
      </PageWrapper>

      <Box bg='#80AB821A' my={5}>
        <PageWrapper>
          <Flex my={10} py={5} px={5} h={500} align={'center'}>
            <Stack flex='1' maxW='500px'>
              <Text textStyle={'h2'} fontSize={'2.5rem'} lineHeight={1.2}>
                Back Winning Teams: Invest Where It Counts
              </Text>
              <Text>
                Every startup on OurAngel undergoes a rigorous vetting process, ensuring you&apos;re investing in companies with not just groundbreaking ideas but also
                solid business models, strong teams, and the potential for substantial growth. Our comprehensive evaluation process means you&apos;re backing ventures
                ready to make an impact.
              </Text>
            </Stack>

            <Box pos={'relative'} h='full' flex={1}>
              <Image fill src='/images/home/back-winning-teams.svg' alt='group' />
            </Box>
          </Flex>
        </PageWrapper>
      </Box>

      <TechnologyTailoredForInvestors />

      <PageWrapper>
        <Stack my={10} borderRadius={10} p={10} bg='#F3F2EE' align='center'>
          <Text textStyle={'h2'} fontSize={'2.2rem'} fontWeight={500}>
            Discover Our Services
          </Text>
          <Text align='center' maxW='800px'>
            At Ourangels, we cater to a diverse community of startups, investors, and fund managers, offering specialized services to meet the unique needs of each.
            Explore what we can do for you:
          </Text>

          <Tabs variant='soft-rounded' w='full'>
            <TabList bg='#13213E' mx='auto' justifyContent={'center'} w='fit-content' borderRadius={24} color='white' h='50px' p={1.5} my={5}>
              <Tab {...tabStyles}>Startups</Tab>
              <Tab {...tabStyles}>Investors</Tab>
              <Tab {...tabStyles}>Fund managers</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <DiscoverOurServicesTabContent heading='Startup' subheading='Manage equity, raise funds, access 409A valuations' images={startupSlideImages || []} />
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
  fontSize: 15,
  px: 5,
  color: 'white',
  _selected: { color: '#333', bg: 'white', borderRadius: 20 },
};
