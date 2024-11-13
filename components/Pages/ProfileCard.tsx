import { Box, Text, Flex, Icon, VStack, HStack, Image } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const InverValenciaCard = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="white"
      px={3}
      
      
      align="center"
      position="relative"
    >
      {/* Left Panel */}
      <Box
        bg="green.700"
        color="white"
          
        w='100%'
        height={400}
        bgImage="url('/texture.png')"
        position="relative"
        overflow="hidden"
      >
        {/* Background Pattern */}
        <Box
           position="relative"
          top="0"
          left="0"
          bottom="0"
          right="0"
          opacity="0.1"
           // Use the correct path
          bgSize="cover"
          zIndex="-1"
        />
        {/* Text Content */}
        <VStack align="start" padding={10}>
          <Text fontSize="2xl" fontWeight="bold">
            Adriana Valencia
          </Text>
          <Text fontSize="xl" color="yellow.400">
            InVerValencia
          </Text>
          <Text fontSize="sm" lineHeight="tall">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Text>
          <Box as="span" fontFamily="cursive" fontSize="lg">
            Adriana's Signature
          </Box>
        </VStack>
        {/* Social Icons */}        
      </Box>
      {/* Right Panel */}
      <Box
        w={{ base: "100%", md: "40%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="imagenpersona.png" // replace with the path to the profile image
          alt="Adriana Valencia"
          height={600}
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
};

export default InverValenciaCard;
