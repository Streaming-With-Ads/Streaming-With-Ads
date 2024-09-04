"use client";

import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, Image, VStack, OrderedList } from '@chakra-ui/react';
import { Video } from './video';

interface ContentProps {
  videos: Video[];
}

const Content: React.FC<ContentProps> = ({ videos }) => (
  <Box pt="5%" position="relative">
    <Heading as="h2" size="xl" p={4} position="fixed" top="6%" w="100%" bg="gray.900" zIndex={999}>
      Videos
    </Heading>
    <Box mt="7%" p={4}>
      {videos.length === 0 ? (
        <Box bg="gray.800" p={6} borderRadius="md" minH="300px" overflowY="auto">
          <VStack align="center" spacing={4}>
            <Box
              w="8rem"
              h="8rem"
              borderRadius="full"
              background="linear-gradient(to bottom right, #8B5CF6, #EC4899)"
              position="relative"
            >
              <Box
                position="absolute"
                inset={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="6rem" h="6rem" bg="gray.800" borderRadius="full" />
              </Box>
            </Box>
            <Heading as="h3" size="lg">How to get started:</Heading>
            <OrderedList spacing={2} color="gray.400" textAlign="left">
              <ListItem>Once your shuttle drive is connected, a pop-up will show up. Click the Upload button or the pop-up to initiate a new upload.</ListItem>
              <ListItem>Camera and sound rolls are recognized via MHL files. Therefore to ensure our system accurately ingests and verifies these rolls, please ensure MHL files are present for each roll.</ListItem>
              <ListItem>All files will be uploaded to Netflix storage and then duplicated to the cloud.</ListItem>
              <ListItem>You'll receive email confirmations once media has been uploaded and verified by the system.</ListItem>
            </OrderedList>
          </VStack>
        </Box>
      ) : (
        <UnorderedList styleType="none" m={0} mt="10%">
          {videos.map((video) => (
            <ListItem key={video.id} mb={4}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden" bg="white" transition="all 0.3s" _hover={{ boxShadow: "xl", transform: "translateY(-5px)" }}>
                <Image src={video.thumbnail} alt={video.title} objectFit="cover" h="150px" w="100%" />
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2} color="gray.800">{video.title}</Heading>
                  <Text color="gray.600">{video.description}</Text>
                </Box>
              </Box>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  </Box>
);

export default Content;