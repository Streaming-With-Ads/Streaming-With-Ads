import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#111827",
        color: "white",
      },
    },
  },
  colors: {
    brand: {
      100: "#93C5FD",
      500: "#3B82F6",
      600: "#2563EB",
    },
    gray: {
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
      baseStyle: {
        dialog: {
          bg: "#f9f9f9",
        },
      },
    },
  },
});

export default theme;