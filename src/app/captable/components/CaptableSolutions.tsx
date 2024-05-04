import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ImageTextContainer } from './ImageTextContainer';
import { PageWrapper } from '@/common/PageWrapper';
import { AutomatedCapTable } from './AuthomatedCaptable';

type typeCaptableSolutionsProps = {};

export function CaptableSolutions({}: typeCaptableSolutionsProps) {
  return (
    <PageWrapper>
      <Stack as='section'>
        <Text textStyle={'h2'} align='center' fontSize={'2.2rem'}>
          Cap Table Solutions Tailored to Your Needs
        </Text>
        <Text align={'center'} fontSize={18}>
          Organize, track, and process payments for your company&apos;s securities.
        </Text>
        <Stack my={10} spacing={16}>
          <ImageTextContainer
            heading='Automated Cap Table Management:'
            subheading='Automated cap table software'
            body={<AutomatedCapTable />}
            imageUrl='/images/captable/1.svg'
          />
          <ImageTextContainer
            heading='Real Time Update'
            subheading='Investor-ready up-to-date cap table'
            body={
              'Stay up to date with the latest changes in your cap table. OurAngels provides real-time updates, allowing you to track and record ownership changes, funding rounds, and equity transactions with ease'
            }
            imageUrl='/images/captable/2.svg'
            order={1}
          />

          <ImageTextContainer
            heading='Intuitive User Experience:'
            subheading='Integrated cap table and legal software'
            body={
              "OurAngels is designed with simplicity in mind, making it easy for founders and entrepreneurs to navigate and understand their cap tables. You don't need to be a finance expert to use our platform effectively. We've created an intuitive user interface that allows you to manage your cap table effortlessly."
            }
            imageUrl='/images/captable/3.svg'
          />
          <ImageTextContainer
            heading='Robust Reporting'
            subheading='Investor-ready up-to-date cap table'
            body={
              'Gain valuable insights into ownership dynamics, dilution effects, and other crucial data with our comprehensive reporting features. OurAngels provides clear and detailed reports, empowering you to make informed decisions and communicate effectively with stakeholders.'
            }
            imageUrl='/images/captable/4.svg'
            order={1}
          />
        </Stack>
      </Stack>
    </PageWrapper>
  );
}
