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
import MemberButton from './ChooseMember';
import AdminButton from './ChooseAdmin';

export default function Hero() {
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
                <AdminButton/>
                <MemberButton/>
            </Stack>
        </Stack>
      </Container>
    </>
  );
}
