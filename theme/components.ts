import { ComponentStyleConfig } from "@chakra-ui/theme"

const Button: ComponentStyleConfig = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "start",
    cursor: "pointer",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "blue.600",
    },
  },
  variants: {
    green: {
      bg: "green.500",
      color: "white",
      _hover: {
        bg: "green.600",
      },
    },
    outline: {
      bg: "gray.50",
      borderWidth: "1px",
      _hover: {
        bg: "gray.100",
      },
    },
    black: {
      bg: "black",
      color: "white",
      _hover: {
        bg: "gray.900",
      },
    },
  },
  sizes: {
    sm: {
      fontWeight: "medium",
      px: "4",
      py: "1",
    },
    md: {
      minWidth: "180px",
      fontWeight: "semibold",
      fontSize: "lg",
      height: "14",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

export const components = {
  Button,
}
