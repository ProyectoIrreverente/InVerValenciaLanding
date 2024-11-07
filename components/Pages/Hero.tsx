// components/Hero.tsx

import { Box, Button, Heading, Text, Stack } from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Box
      h="100vh"
      bgImage="url('/path-to-hero-image.png')"
      bgSize="cover"
      
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      {/* Overlay */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.600" zIndex="1" />

      {/* Content */}
      <Stack
       
        textAlign="center"
        maxW="lg"
        zIndex="2"
        position="relative"
        px={6}
      >
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>InVer Valencia</Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }}>
          Tu opción para invertir en los mejores desarrollos de Querétaro
        </Text>
        <Button
          as="a"
          // Adjust the href as necessary
          colorScheme="teal"
          size="lg"
          mt={4}
        >
          AGENDA CITA
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
