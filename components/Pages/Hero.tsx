// components/Hero.tsx

import { Box, Button, Heading, Text, Stack } from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Box
      h="100vh"
      bgImage="url('/lakehouse.jpg')" // Replace with the correct path to your image
      bgSize="cover"
     
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      position="relative"
      px={{ base: 4, md: 16 }} // Adds padding on left and right
    >
      {/* Overlay */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.600" zIndex="1" />

      {/* Content */}
      <Stack
        
        textAlign="left"
        maxW="md"
        zIndex="2"
        position="relative"
        px={4}
        ml={{ base: 0, md: 8 }} // Adjusts the left margin for larger screens
      >
        <Heading fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" lineHeight="1.2">
          InVer Valencia
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md' }} maxW="sm">
          Tu opción para invertir en los mejores desarrollos de Querétaro
        </Text>
        <Button
          as="a"
          // Adjust this href as needed
          bg="teal.800" // Custom color to match the button style
          color="white"
          _hover={{ bg: 'teal.600' }}
          size="md"
          px={6}
          py={2}
          mt={4}
        >
          AGENDA CITA
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
