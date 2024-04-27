import { Box, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { WhatsNewCard } from './WhatsNewCard';
import { OutlinedButton, PrimaryLightButton } from '@/common/CustomButtons';
import { ArrowRight } from 'iconsax-react';
import { PageWrapper } from '@/common/PageWrapper';
import Image from 'next/image';

export function WhatsNewOnOurAngel() {
  return (
    <PageWrapper>
      <Stack as='section' my={10}>
        <HStack justify={'space-between'} my={'1rem'}>
          <Text textStyle={'h2'}>What’s New On OurAngel </Text>
          <OutlinedButton size='sm' rightIcon={<ArrowRight />}>
            View
          </OutlinedButton>
        </HStack>
        <SimpleGrid columns={[3]} gap='2rem'>
          <WhatsNewCard
            image='/images/home/what-new1.png'
            heading='Make everyday a payday'
            subheading='Collaboration can make our teams stronger, and our individual designs better.'
          />
          <WhatsNewCard
            image='/images/home/what-new2.png'
            heading='Announcing our $10m series'
            subheading='JavaScript frameworks make development easy with extensive features and functionalities.'
          />
          <WhatsNewCard
            image='/images/home/what-new3.png'
            heading='Creating a better CX Community'
            subheading='Starting a community doesn’t need to be complicated, but how do you get started?'
          />
        </SimpleGrid>
      </Stack>

      <HStack bg='extremethemeDarkBlue' pl={5} pt={5} h={[350]} color='white' my={10} borderRadius={5}>
        <Stack flex='1' ml={'5%'}>
          <Text>Build With OurAngel</Text>
          <Text textStyle={'h2'} fontSize={['2.5rem']} lineHeight={1.2} color='white'>
            Join the next generation of <br /> builders
          </Text>
          <PrimaryLightButton w={150} color='themeLightBlue' bg='white'>
            Get Started
          </PrimaryLightButton>
        </Stack>

        <Image className='h-[250px] w-[600px] self-end self' alt='Build With OurAngel' width={400} height={300} src='/images/home/Group 5379.png' />
      </HStack>
      <Text maxW='1100px' px='1%' mx='auto' my={5}>
        The information on this website is provided for informational purposes only and should not be considered a recommendation for any investment, service, product, or
        advice. It does not constitute an offer or solicitation for any securities or investment opportunities. Before making any investment decisions, ensure that you
        thoroughly review and understand the associated risks and legal documents. We recommend seeking professional advice and conducting your own due diligence
        alongside ours. By using this website, you agree that OurAngel is not liable for any loss or damage resulting from your reliance on the information provided. If
        you have any questions or concerns regarding this disclaimer, please contact our support team by sending an email to complaints@ourangel.com. 
      </Text>
    </PageWrapper>
  );
}
