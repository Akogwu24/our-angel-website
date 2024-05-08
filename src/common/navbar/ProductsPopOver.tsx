'use client';

import {
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import FeaturedToolCard from './FeaturedToolCard';
import { GetStartedVideo } from './GetStartedVideo';
import { featuredTools } from './extras';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ProductsPopOver = () => {
  const pathname = usePathname();
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    onClose();
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <Popover placement='bottom' isOpen={isOpen} onClose={onClose} closeOnBlur={false}>
        <PopoverTrigger>
          <Text onClick={onToggle} cursor={'pointer'}>
            Products
          </Text>
        </PopoverTrigger>
        {/* <Portal> */}
        <PopoverContent w='100%'>
          <PopoverCloseButton right='-1' top={-1} />
          {/* <PopoverArrow /> */}
          <PopoverBody as={Flex} gap='2rem' direction={['column', 'row']} border={'none'} outline={'none'}>
            <>
              <SimpleGrid gap='2rem' columns={[3]}>
                {featuredTools.map((tool, i) => (
                  <FeaturedToolCard key={i} tool={tool} />
                ))}
              </SimpleGrid>
              <GetStartedVideo />
            </>
          </PopoverBody>
        </PopoverContent>
        {/* </Portal> */}
      </Popover>
    </>
  );
};
