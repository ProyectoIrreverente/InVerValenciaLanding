import {
    Box,
    Button,
 
    Flex,
    HStack,
    IconButton,
    Input,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
  import { Checkbox } from "@/components/ui/checkbox"
  const ContactForm = () => {
    return (
      <Flex
        maxW="800px"
        mx="auto"
        mt="8"
        borderRadius="md"
        overflow="hidden"
        boxShadow="lg"
        bg="#204E37"
      >
        {/* Left Image Section */}
        <Box
          flex="1"
          bgImage="url('formbg.jpg')"
          bgSize="cover"
         
        />
  
        {/* Right Form Section with Texture */}
        <Box
          flex="2"
          p="8"
          color="white"
          bg="#1D4733"
          position="relative"
          overflow="hidden"
        >
          {/* Texture Overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage="url('texture.png')"
            bgSize="cover"
            opacity="0.2"
            zIndex="0"
          />
  
          {/* Form Content */}
          <Box position="relative" zIndex="1">
            <Text fontSize="sm" textTransform="uppercase" mb="2" fontWeight="bold">
              invervalencia
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              Contáctanos, obtén asesoría personalizada en la inversión de tu vida
            </Text>
  
            {/* Social Icons */}
            <HStack  mb="6">
              <IconButton
                as="a"
                
              
                aria-label="WhatsApp"
                bg="transparent"
                fontSize="24px"
              >
 <FaWhatsapp />
              </IconButton>
              <IconButton
                as="a"
                
                
                aria-label="Facebook"
                bg="transparent"
                fontSize="24px"
              >
               <FaFacebook />
              </IconButton>
              <IconButton
                as="a"
                
             
                aria-label="Instagram"
                bg="transparent"
                fontSize="24px"
              >
                  <FaInstagram />
              </IconButton>
            </HStack>
  
            {/* Contact Form */}
            <VStack  align="stretch">
              <Box>
                <Text mb="1">Nombre:</Text>
                <Input bg="rgba(255, 255, 255, 0.1)" borderColor="transparent" />
              </Box>
  
              <HStack >
                <Box>
                  <Text mb="1">Teléfono:</Text>
                  <Input bg="rgba(255, 255, 255, 0.1)" borderColor="transparent" />
                </Box>
                <Box>
                  <Text mb="1">Edad:</Text>
                  <Input bg="rgba(255, 255, 255, 0.1)" borderColor="transparent" />
                </Box>
              </HStack>
  
              <Box>
                <Text mb="1">Email:</Text>
                <Input bg="rgba(255, 255, 255, 0.1)" borderColor="transparent" />
              </Box>
  
              <Box>
                <Text mb="1">Comentario:</Text>
                <Textarea
                  bg="rgba(255, 255, 255, 0.1)"
                  borderColor="transparent"
                  resize="none"
                />
              </Box>
  
              <Checkbox colorScheme="green" defaultChecked>
                Acepto
              </Checkbox>
  
              <Button colorScheme="green" size="md">
                Enviar
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default ContactForm;
  