import React from "react";
import {
  Stack,
  Button,
  useMediaQuery
} from '@chakra-ui/react';
import { useAccount } from 'wagmi';

export default function Choose() {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const { isConnected } = useAccount()
  return (
    <>              
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
    </>
  );
}


