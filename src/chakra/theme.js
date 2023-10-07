// 1. Import `extendTheme`
// import "@fontsource/roboto-mono/500.css";
// import "@fontsource/roboto-mono/700.css";
// import "@fontsource/rubik/400.css";
// import "@fontsource/rubik/500.css";

import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 1. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: "#0066b2",
      // ...
      900: "#ffffff",
    },
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#ffffff",
      },
    }),
  },
  components: {
    Button,
  },
});
