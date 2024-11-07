// components/Layout.tsx

import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <Box as="main">
        {children}
      </Box>

      {/* Footer (optional) */}
      <Box as="footer" py={4} textAlign="center" bg="gray.800" color="white">
        © {new Date().getFullYear()} InverValencia. All rights reserved.
      </Box>
    </Box>
  );
};

export default Layout;
