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
  useColorModeValue,
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

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Modal isOpen={true} onClose={onCancel} size="md">
      <ModalOverlay />
      <ModalContent borderRadius="md" bg={bgColor}>
        <ModalHeader color={textColor} borderBottom="1px" borderColor={borderColor} py={4}>
          Upload Video
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleFormSubmit}>
          <ModalBody py={6}>
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel htmlFor="videoTitle" color={textColor} fontWeight="medium">
                  Title <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Input 
                  id="videoTitle" 
                  name="title" 
                  bg={bgColor} 
                  color={textColor}
                  borderColor={borderColor}
                  _hover={{ borderColor: "blue.400" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="videoDescription" color={textColor} fontWeight="medium">
                  Description <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Textarea 
                  id="videoDescription" 
                  name="description" 
                  bg={bgColor}
                  color={textColor}
                  borderColor={borderColor}
                  _hover={{ borderColor: "blue.400" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
                  rows={4}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="videoFile" color={textColor} fontWeight="medium">
                  Video File <Text as="span" color="red.500"></Text>
                </FormLabel>
                <Box
                  border="1px"
                  borderColor={borderColor}
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
                    colorScheme="blue" 
                    size="sm"
                    cursor="pointer"
                  >
                    Choose File
                  </Button>
                  <Text ml={2} display="inline-block" color={textColor}>
                    {selectedFile ? selectedFile.name : 'No file chosen'}
                  </Text>
                </Box>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter borderTop="1px" borderColor={borderColor} py={4}>
            <Button colorScheme="blue" mr={3} type="submit">
              Submit
            </Button>
            <Button variant="ghost" onClick={onCancel} color={textColor}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UploadForm;
