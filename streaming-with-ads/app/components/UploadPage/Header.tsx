"use client";

import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

interface HeaderProps {
  onUploadClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onUploadClick }) => (
  <Flex
    as="header"
    align="center"
    justify="space-between"
    p={4}
    bg="gray.800"
    position="fixed"
    w="100%"
    h="6%"
    top={0}
    left={0}
    zIndex={1000}
  >
    <Flex align="center">
      <Box bg="red.600" w={8} h={8} mr={2} />
      <Text fontSize="xl" fontWeight="bold">Streaming With Ads</Text>
    </Flex>
    <Button 
      onClick={onUploadClick} 
      size="sm" 
      px={3}    
      py={1}  
      fontSize="sm"  
    >
      + Upload
    </Button>
  </Flex>
);

export default Header;
