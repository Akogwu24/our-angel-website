import { PageWrapper } from '@/common/PageWrapper';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { InvestWitInsightCard } from './InvestWitInsightCard';
import { commonlyAskedQuestions } from './extras';
import { PrimaryLightButton } from '@/common/CustomButtons';
import { ArrowRight } from 'iconsax-react';

export function InvestWithInsight() {
  return (
    <>
      <Box as='section' bg='black' color='white' my={20}>
        <PageWrapper>
          <Stack p={10} px={5} my={5}>
            <Text textStyle='h2' color='white' fontSize={'2.2rem'}>
              Invest with Insight: Our Rigorous Startup Vetting Process
            </Text>
            <Text maxW='1000px'>
              At Ourangels, your investment confidence is our priority. We meticulously vet every startup in our portfolio through a robust process that combines
              third-party analyses with our own in-depth research. <br /> Our approach focuses on three core areas:
            </Text>
            <SimpleGrid columns={[3]} gap='2rem' my={5}>
              <InvestWitInsightCard
                heading='Technological Edge'
                subheading="We ensure each startup's technology is not just innovative but has the potential to lead its industry, offering scalable solutions that meet tomorrow's needs."
                imagePath='/images/startups/Featured icon.svg'
              />
              <InvestWitInsightCard
                heading='Leadership Excellencee'
                subheading='We delve into the track records and visions of the management teams, selecting those with the proven capability to navigate growth and challenges.'
                imagePath='/images/startups/Featured icon (1).svg'
              />
              <InvestWitInsightCard
                heading='Market Potential'
                subheading="We analyze market size, growth prospects, and the startup's competitive positioning to ensure it addresses real needs with a clear value proposition."
                imagePath='/images/startups/Featured icon (2).svg'
              />
            </SimpleGrid>
          </Stack>
        </PageWrapper>
      </Box>
    </>
  );
}
