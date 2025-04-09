import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    minecraft: {
      // Minecraft-inspired colors
      dirt: '#8B4513',
      grass: '#567D46',
      stone: '#808080',
      wood: '#8B4513',
      // Orange theme colors
      orange: {
        50: '#FFF5E6',
        100: '#FFE0B3',
        200: '#FFCC80',
        300: '#FFB74D',
        400: '#FFA726',
        500: '#FF9800', // Main orange
        600: '#F57C00',
        700: '#EF6C00',
        800: '#E65100',
        900: '#BF360C',
      },
    },
  },
  fonts: {
    heading: '"Minecraft", sans-serif',
    body: '"Minecraft", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'none', // Minecraft's blocky style
        fontWeight: 'normal',
      },
      sizes: {
        md: {
          fontSize: { base: 'sm', md: 'md' },
          px: { base: 4, md: 6 },
          py: { base: 2, md: 3 },
        },
        lg: {
          fontSize: { base: 'md', md: 'lg' },
          px: { base: 6, md: 8 },
          py: { base: 3, md: 4 },
        },
      },
      variants: {
        minecraft: {
          bg: 'minecraft.orange.500',
          color: 'white',
          _hover: {
            bg: 'minecraft.orange.600',
          },
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: ['100%', '100%', '90%', '1200px'],
        px: [4, 6, 8],
        mx: 'auto',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        '2xl': {
          fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
        },
        '3xl': {
          fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
        },
        '4xl': {
          fontSize: { base: '4xl', md: '5xl', lg: '6xl' },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'minecraft.dirt',
        color: 'white',
        minH: '100vh',
        overflowX: 'hidden',
      },
      html: {
        overflowX: 'hidden',
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  space: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
})

export default theme 