/**
 * Lazerpay Design System - https://www.figma.com/file/1ruX4BnkL8HE2FM4B9SgoI/LazerPay-Design-System?node-id=0%3A1
 */

 module.exports = {
  content: [
    './components/**/*.{jsx,tsx,js,ts,mdx}',
    './layouts/**/*.{jsx,tsx,js,ts,mdx}',
    './pages/**/*.{jsx,tsx,js,ts,mdx}',
    './content/**/*.{jsx,tsx,js,ts,mdx}',
  ],
  theme: {
    namedGroups: ["foo", "2", "3"],
    extend: {
      borderRadius: {
        4: "4px",
        5: "5px",
        6: "6px",
        8: "8px",
        12: "12px",
        15: "15px",
        20: "20px"
      },
      maxWidth: {
        "100": "100px",
        "9xl": "1500px",
        "screen-3xl": "1650px"
      },
      height: {
        "90vh": "90vh"
      },
      shadow: {
        lg: "0px 0px 1px rgba(12, 26, 75, 0.1), 0px 10px 16px rgba(20, 37, 63, 0.06)"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "34px",
        xl: "70px"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      proxima: "proxima",
      ttfirs: "ttfirs",
      sohne: "sohne",
      display: "ttfirs",
      body: "proxima"
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      xs2: "13px",
      sm: "14px",
      base: "16px",
      md: "18px",
      md2: "19px",
      lg: "20px",
      lg2a: "21px",
      lg2: "23px",
      xl: "28px",
      "2xl": "33px",
      "2xl2": "34px",
      "3xl": "39px",
      "4xl": "48px",
      "5xl": "60px",
      "6xl": "72px"
    },
    dropShadow: {
      none: "none",
      light: "0px 13px 37px rgba(0, 0, 0, 0.21)",
      subtle: "0px 4px 8px rgba(100, 100, 100, 0.05)",
      xs: "0px 4px 8px rgba(0, 0, 0, 0.08)",
      sm: "0px 6px 12px rgba(0, 0, 0, 0.11)",
      md: "0px 9px 18px rgba(0, 0, 0, 0.15)",
      lg: "0px 13px 37px rgba(0, 0, 0, 0.21)",
      xl: "0px 20px 56px rgba(0, 0, 0, 0.29)"
    },
    colors: {
      transparent: "transparent",
      bg: "#F4F3EE",
      bgLight: "#E5E5E5",
      black: "#000000",
      white: "#FFFFFF",
      offWhite: "#FCF7EF",
      neu: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A"
      },
      pri: {
        50: "#e6ebf3",
        100: "#a0bde9",
        200: "#719ddf",
        300: "#417cd4",
        400: "#2a6bce",
        500: "#125bc9",
        600: "#0e49a1",
        700: "#0b3779",
        800: "#072450",
        900: "#041228"
      },
      sec: {
        50: "#fdf0ed",
        100: "#f8c4b8",
        200: "#f5a794",
        300: "#f18971",
        400: "#f07b5f",
        500: "#ee6c4d",
        600: "#d66145",
        700: "#a74c36",
        800: "#773627",
        900: "#472017"
      },
      suc: {
        50: "#ebfaf2",
        100: "#d7f4e4",
        200: "#afe9c9",
        300: "#87dfae",
        400: "#5fd493",
        500: "#37C978",
        600: "#2CA160",
        700: "#217948",
        800: "#165030",
        900: "#0b2818"
      },
      war: {
        50: "#0b2818",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F"
      },
      err: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D"
      },
      dar: {
        50: "#5F626B",
        100: "#555962",
        200: "#4C4F59",
        300: "#424651",
        400: "#424651",
        500: "#393D48",
        600: "#2F343F",
        700: "#262A36",
        800: "#1C212E",
        900: "#131825"
      }
    }
  },
};
