'use client';

import { Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import FeaturedToolCard from './FeaturedToolCard';
import { resourcesTools } from './extras';

export function ResourcesPopover() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover placement='bottom' isOpen={isOpen} onClose={onClose} closeOnBlur={true}>
      <PopoverTrigger>
        <Text onMouseOver={onOpen} onMouseOut={onClose} cursor={'pointer'}>
          Resources
        </Text>
      </PopoverTrigger>
      <PopoverContent mt={4} onMouseOver={onOpen} onMouseOut={onClose}>
        <PopoverCloseButton />
        <PopoverBody>
          <Text fontSize={13} mb={4} color='gray.500'>
            RESOURCES
          </Text>
          <Stack spacing={3}>
            {resourcesTools.map((tool, index) => (
              <FeaturedToolCard key={index} p={2} tool={tool} />
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
