import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react";

// Define the configuration type
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme: ThemeOverride = {
  config,
  styles: {
    global: (props: { colorMode: 'light' | 'dark' }) => ({
      body: {
        bg: props.colorMode === 'dark' ? "gray.900" : "white",
        color: props.colorMode === 'dark' ? "white" : "gray.800",
      },
    }),
  },
  colors: {
    brand: {
      100: "#93C5FD",
      500: "#3B82F6",
      600: "#2563EB",
    },
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    red: {
      600: "#DC2626",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
            transform: "scale(1.05)",
          },
          _focus: {
            boxShadow: "0 0 0 3px #93C5FD",
          },
        },
      },
    },
    Modal: {
      baseStyle: (props: { colorMode: 'light' | 'dark' }) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? "gray.800" : "white",
          color: props.colorMode === 'dark' ? "white" : "gray.800",
        },
      }),
    },
  },
};

export default extendTheme(theme);