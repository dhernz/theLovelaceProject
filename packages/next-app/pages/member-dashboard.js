import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Text,
    Switch,
    CheckCircleIcon
} from '@chakra-ui/react';

  export default function Form() {
    return (
    <div>
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                This is the headline
            </Heading>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet
            </Text>
        </Box>
    </div>
    );
  }