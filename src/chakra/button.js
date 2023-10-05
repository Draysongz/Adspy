

export const Button = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#0066B2",
      _hover: {
        bg: "white",
        color: '#0066B2',
        border: '1px solid #0066B2'
      },
    },
    outline: {
      bg: "transparent",
      color: '#0066B2',
      border: '1px solid ',
      borderColor: '#0066B2',
      _hover: {
        bg: "gray.400",
        border: '1px solid #0066B2',
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};
