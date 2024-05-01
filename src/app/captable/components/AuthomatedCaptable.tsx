'use client';

import { ListIcon, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { GiCheckMark } from 'react-icons/gi';

export const AutomatedCapTable = () => {
  return (
    <Stack>
      <Text>
        OurAngels offers a sophisticated platform that automates cap table management processes, eliminating the need for manual calculations and spreadsheet errors. This
        streamlines the entire process and ensures accuracy in tracking ownership and equity distribution.
      </Text>
      <UnorderedList listStyleType={'none'} m={0}>
        <ListItem>
          <ListIcon as={GiCheckMark} color='green.500' />
          Automatically updates when shareholdings change
        </ListItem>
        <ListItem>
          <ListIcon as={GiCheckMark} color='green.500' /> Built-in scenario planning - model fundraising and exit
        </ListItem>
      </UnorderedList>
    </Stack>
  );
};
