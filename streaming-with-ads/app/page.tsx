import UploadPage from './components/UploadPage';
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return <ChakraProvider>
    <UploadPage />
  </ChakraProvider>;
}