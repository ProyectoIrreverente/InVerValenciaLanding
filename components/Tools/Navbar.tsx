// components/Navbar.tsx

import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Image, Link as ChakraLink } from '@chakra-ui/react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} passHref>
      <ChakraLink
        px={2}
        py={1}
        rounded={'md'}
        _hover={{ textDecoration: 'none', bg: 'gray.700' }}
        aria-current={router.pathname === href ? 'page' : undefined}
      >
        {children}
      </ChakraLink>
    </Link>
  );

  return (
    <Box bgImage="url('/texture.png')" bgSize="cover"  px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <Box>
            <Image src="/invervalencia.png" alt="InverValencia Logo" height="100px" />
          </Box>
         
        </HStack>
        <IconButton
          size={'md'}
          
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        >
            {isOpen ? <FaTimes /> : <FaBars />}
        </IconButton>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} >
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
