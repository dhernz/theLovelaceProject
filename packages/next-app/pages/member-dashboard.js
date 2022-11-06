  import React, { useState, useEffect } from "react";
  import {
      Box,
      Button,
      Flex,
      FormControl,
      FormLabel,
      Heading,
      Select,
      NumberInput,
      NumberInputStepper,
      NumberIncrementStepper,
      NumberDecrementStepper,
      NumberInputField,
      Input,
      InputGroup,
      InputLeftElement,
      Stack,
      Textarea,
      VStack,
      useColorModeValue,
      useToast,
      Text,
      Switch
  } from '@chakra-ui/react';
    import Navbar from "./components/Navbar";
    import Header from "./Header";
    // Icon
    import { BsPerson } from 'react-icons/bs';
  
    export default function Admin() {
      const toast = useToast();
      return (
      <div>
          <Stack
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: 'lg' }}>
              <Stack spacing={4}>
                  <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                    Member Stats
                  </Heading>
                  <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                  </Text>
              </Stack>
        

              <Button
                  colorScheme="blue"
                  bg="blue.400"
                  color="white"
                  _hover={{
                  bg: 'blue.500',
                  }}
                  onClick={(e)=> handleSubmit(e)}>
                  Submit
              </Button>
          </Stack>
      </div>
      );
    }