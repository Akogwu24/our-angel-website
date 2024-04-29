import React from 'react';
import { PageWrapper } from './PageWrapper';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Stack, Text } from '@chakra-ui/react';
import { commonlyAskedQuestions } from '@/app/startups/components/extras';
import { ArrowRight } from 'iconsax-react';
import { PrimaryLightButton } from './CustomButtons';

export function CommonlyAskedQuestions() {
  return (
    <PageWrapper>
      <Flex gap='1rem' px={'5%'}>
        <Text textStyle={'h2'} flex='1'>
          Commonly asked questions
        </Text>

        <Accordion as={Stack} spacing='8' mt='3rem' flex='1' mx='auto' allowToggle>
          {commonlyAskedQuestions.map((que, index) => (
            <AccordionItem key={index} border='none' borderRadius={'8px'} borderBottom='1px solid #eee'>
              <h2>
                <AccordionButton bg=''>
                  <Text py='0.5rem' textStyle='h4' fontWeight={500} as='span' flex='1' textAlign='left' border={'none'} boxShadow={'none'}>
                    {que.question}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={15}>
                {que.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
          <PrimaryLightButton rightIcon={<ArrowRight size={18} />} bg='none' w='fit-content' color='themeLightBlue' variant='link'>
            More FAQ
          </PrimaryLightButton>
        </Accordion>
      </Flex>
    </PageWrapper>
  );
}
