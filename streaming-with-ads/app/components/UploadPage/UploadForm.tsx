"use client";

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { Video } from './video';

interface UploadFormProps {
  onSubmit: (newVideo: Video) => void;
  onCancel: () => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onSubmit, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile) {
      const newVideo: Video = {
        id: Date.now(),
        title: (event.target as HTMLFormElement).videoTitle.value,
        description: (event.target as HTMLFormElement).videoDescription.value,
        thumbnail: URL.createObjectURL(selectedFile),
      };

      onSubmit(newVideo);
    }
  };

  return (
    <Modal isOpen={true} onClose={onCancel} size="md">
      <ModalOverlay />
      <ModalContent borderRadius="md" bg="white">
        <ModalHeader color="gray.800" borderBottom="1px" borderColor="gray.200" py={4}>
          Upload Video
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleFormSubmit}>
          <ModalBody py={6}>
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel htmlFor="videoTitle" color="gray.700" fontWeight="medium">
                  Title <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Input 
                  id="videoTitle" 
                  name="title" 
                  bg="white" 
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="videoDescription" color="gray.700" fontWeight="medium">
                  Description <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Textarea 
                  id="videoDescription" 
                  name="description" 
                  bg="white" 
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                  rows={4}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="videoFile" color="gray.700" fontWeight="medium">
                  Video File <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Box
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="md"
                  p={2}
                >
                  <Input
                    type="file"
                    id="videoFile"
                    name="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    hidden
                  />
                  <Button 
                    as="label" 
                    htmlFor="videoFile" 
                    colorScheme="gray" 
                    size="sm"
                    cursor="pointer"
                  >
                    Choose File
                  </Button>
                  <Text ml={2} display="inline-block">
                    {selectedFile ? selectedFile.name : 'No file chosen'}
                  </Text>
                </Box>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter borderTop="1px" borderColor="gray.200" py={4}>
            <Button colorScheme="blue" mr={3} type="submit">
              Submit
            </Button>
            <Button variant="ghost" onClick={onCancel} color="gray.600">Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UploadForm;