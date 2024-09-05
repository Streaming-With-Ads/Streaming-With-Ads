"use client";

import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/UploadPage/theme';
import Home from './components/Home';

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}
