import { InvestWitInsightCard } from '@/common/InvestWitInsightCard';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export function FeaturesForSuccess() {
  return (
    <Box as='section' bg='black' color='white' my={20}>
      <PageWrapper>
        <Stack p={10} px={[0, 2, 4, 5]} my={5}>
          <Text textStyle='h2' color='white' align='center' fontSize={'2.2rem'}>
            Features Designed for Success
          </Text>

          <SimpleGrid columns={[1, 1, 2]} gap='2rem' my={5}>
            <InvestWitInsightCard
              heading='Raise Funds Efficiently'
              subheading=' With Ourangels, access a broad network of eager investors. Our platform makes it easy to present your fund, communicate its value proposition, and close the deal.'
              imagePath='/images/fund-management/Featured7.svg'
            />
            <InvestWitInsightCard
              heading='Invest in Promising Startups'
              subheading="Explore a curated selection of startups. Our analytics and vetting tools help you make informed decisions, ensuring your investments align with your fund's strategy."
              imagePath='/images/fund-management/Featured8.svg'
            />
            <InvestWitInsightCard
              heading='Manage Limited Partners with Ease'
              subheading=' Ourangels simplifies the management of limited partners. Provide regular updates, distribute reports, and maintain transparency through our intuitive platform.'
              imagePath='/images/fund-management/Featured9.svg'
            />
            <InvestWitInsightCard
              heading='Ensure Regulatory Compliance'
              subheading='Navigate the complex landscape of regulatory requirements with confidence. Ourangels is designed to keep your fund compliant with all relevant laws and regulations.'
              imagePath='/images/fund-management/Featured10.svg'
            />
          </SimpleGrid>
        </Stack>
      </PageWrapper>
    </Box>
  );
}
