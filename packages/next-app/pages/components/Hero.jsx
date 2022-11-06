import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Button,
  Img,
  useMediaQuery
} from '@chakra-ui/react';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from 'wagmi';


export default function Hero() {
  const { connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            The <br/>
            <Text as={'span'} color={'pink.300'}>
              Lovelace <br/>
            </Text>
            Project <br/>
          </Heading>
          <Text>
            add text here
          </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
                <ConnectButton/>
                { isConnected ?  
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
              </Stack> : ""}
            </Stack>
        </Stack>
      </Container>
    </>
  );
}
