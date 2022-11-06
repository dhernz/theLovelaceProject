import React from "react";
import {
  Stack,
  Button,
  useMediaQuery
} from '@chakra-ui/react';

export default function Choose() {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <>
        <Stack>
            <Button
                w="200px"
                colorScheme="blue"
                variant="solid"
                h="50px"
                size={isLargerThanLG ? 'lg' : 'md'}
                mb={isLargerThanLG ? '0' : '10'}
                onClick={(e) => { 
                    e.preventDefault();
                    window.location.href='/admin-dashboard';
                }}>
            Admin
            </Button>                             
            <Button
                w="200px"
                colorScheme="blue"
                variant="solid"
                h="50px"
                size={isLargerThanLG ? 'lg' : 'md'}
                mb={isLargerThanLG ? '0' : '10'}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/member-dashboard';
                }}>
                Member
            </Button> 
        </Stack>
    </>
  );
}
