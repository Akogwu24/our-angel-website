import { InvestWitInsightCard } from '@/common/InvestWitInsightCard';
import { PageWrapper } from '@/common/PageWrapper';
import { Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export function FeaturesDesign() {
  return (
    <Box as='section' bg='black' color='white' my={20}>
      <PageWrapper>
        <Stack p={10} px={5} my={5}>
          <Text textStyle='h2' color='white' align='center' fontSize={'2.2rem'}>
            Features Designed for Success
          </Text>

          <SimpleGrid columns={[2]} gap='2rem' my={5}>
            <InvestWitInsightCard
              heading='Accurate Valuations'
              subheading="Determine your company's valuation and use that data to engage the most proactive investors in your industry."
              imagePath='/images/fund-management/Featured7.svg'
            />
            <InvestWitInsightCard
              heading='Legal Compliance'
              subheading='Get personalized assistance, analysis, and legal advice on corporate structuring and regulatory compliance.'
              imagePath='/images/fund-management/Featured8.svg'
            />
            <InvestWitInsightCard
              heading='Simplify Your Business Process'
              subheading='We understand that your time is precious as a founder. That’s why we handle the tough tasks, so you can focus on growing your business.'
              imagePath='/images/fund-management/Featured9.svg'
            />
            <InvestWitInsightCard
              heading='Connect with Investors'
              subheading='Gain access to our network of seasoned investors ready to support your fundraising journey from start to finish.'
              imagePath='/images/fund-management/Featured10.svg'
            />
            <InvestWitInsightCard
              heading='Manage and Allocate Raised Funds'
              subheading='Effectively manage the collection and distribution of raised funds at the close of every round - You have full control.'
              imagePath='/images/fund-management/Featured9.svg'
            />
            <InvestWitInsightCard
              heading='Let experts build your pitch deck'
              subheading='While every company and raise is unique, there are specific, consistent information that investors want to see. Our expert Team will create the pitch deck you need for a winning presentation.'
              imagePath='/images/fund-management/Featured10.svg'
            />
          </SimpleGrid>
        </Stack>
      </PageWrapper>
    </Box>
  );
}
