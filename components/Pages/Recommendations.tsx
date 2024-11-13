import { Box, Grid, Heading, Text, Image, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    image: '/path/to/image1.jpg',
    name: 'Jane Doe',
    review: '"Increíble servicio!"'
  },
  {
    image: '/path/to/image2.jpg',
    name: 'John Smith',
    review: '"Excelente experiencia!"'
  },
  {
    image: '/path/to/image3.jpg',
    name: 'Maria Lopez',
    review: '"Muy recomendable!"'
  }
];

export default function Recommendations() {
  return (
    <Box textAlign="center" py={10} px={5}>
      <Heading as="h2" size="xl" mb={4}>
        Recommendations
      </Heading>
      <Text fontSize="lg" mb={8}>
        Contact us for personalized investment advice. We improve your life, and we've been doing it for a million years (or close to it)!
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }} gap={6}>
        {testimonials.map((testimonial, index) => (
          <VStack key={index} bg="gray.50" borderRadius="md" p={5} shadow="md" >
            <Image
              borderRadius="full"
              boxSize="100px"
              src={testimonial.image}
              alt={testimonial.name}
              objectFit="cover"
            />
            <HStack>
              {Array(5).fill('').map((_, i) => (
                <Icon  key={i} color="yellow.400" >
                  <FaStar/>
                </Icon>
              ))}
            </HStack>
            <Text fontSize="md" fontStyle="italic">
              {testimonial.review}
            </Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
}
