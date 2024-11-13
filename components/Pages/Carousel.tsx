// components/Carousel.tsx

import { Box, Text, Heading, Button, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <Box
      onClick={onClick}
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      cursor="pointer"
      bg="white"
      borderRadius="full"
      p={2}
      boxShadow="md"
      _hover={{ bg: "gray.300" }}
    >
      <MdChevronLeft size={24} color="black" />
    </Box>
  );
  
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <Box
      onClick={onClick}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      cursor="pointer"
      
      bg="white"
      borderRadius="full"
      p={2}
      boxShadow="md"
      _hover={{ bg: "gray.300" }}
    >
      <MdChevronRight size={24} color="black" />
    </Box>
  );
  
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />, // Use custom left arrow
    nextArrow: <NextArrow />, 
    appendDots: (dots: any) => (
      <Box mt={4}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        width="10px"
        height="10px"
        bg="gray.300"
        borderRadius="50%"
        cursor="pointer"
        _hover={{ bg: 'gray.500' }}
      />
    ),
  };

  const slides = [
    {
      title: 'Preserve SUR',
      description:
        'Tu opción para invertir en los mejores desarrollos de Querétaro. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      lotes: 156,
      metraje: '140 - 300m²',
      amenities: 'Alberca, cerro, ciclopista, etc.',
      price: '$1,000,000',
      image: '/caro.jpg', // Replace with the actual image path
    },
    {
      title: 'Another Project',
      description: 'Another project description here.',
      lotes: 80,
      metraje: '100 - 200m²',
      amenities: 'Parque, ciclopista, lago, etc.',
      price: '$800,000',
      image: '/caro.jpg', // Replace with the actual image path
    },
  ];

  return (
    <Box width="100%" mx="auto" pb={5} px={3} pt={3}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
         <Box key={index} position="relative" width="100%" height="500px">
         {/* Image Section */}
         <Box
           width={{ base: '100%', md: '50%' }}
           height="100%"
           position="relative"
           overflow="hidden"
           float="left"
         >
           <Image
             src={slide.image}
             alt={slide.title}
             width={1000} // Set appropriate width for your layout
             height={1000} // Set appropriate height for your layout
             objectFit="cover"
           />
         </Box>

         {/* Text Section */}
         <Box
           position="relative"
           width={{ base: '100%', md: '50%' }}
           height="100%"
           bg="green.900"
           color="white"
           display="flex"
           flexDirection="column"
           justifyContent="center"
           p={6}
           bgImage="url('/texture.png')" // Ensure this path is correct
           bgSize="cover"
        
           float="right"
         >
           <Heading fontSize="2xl" mb={2}>{slide.title}</Heading>
           <Text mb={4} fontSize="sm">{slide.description}</Text>
           <Text fontSize="sm">Lotes: {slide.lotes}</Text>
           <Text fontSize="sm">Metraje: {slide.metraje}</Text>
           <Text fontSize="sm">Amenidades: {slide.amenities}</Text>
           <Text fontSize="lg" fontWeight="bold" mt={4}>Desde: {slide.price}</Text>
           <Button
             mt={4}
             size="sm"
             bg="white"
             color="green.900"
             _hover={{ bg: 'green.700', color: 'white' }}
           >
             Conoce más
           </Button>
         </Box>
       </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
