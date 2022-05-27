import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  transition: {
    all02: "all 0.2s ease",
    all03: "all 0.3s ease",
    all04: "all 0.4s ease",
    all05: "all 0.5s ease",
  },
  colors: {
    white: "#f7f7f7",
    black: "#121111",
    blue100: "#e1f5fe",
    blue500: "#03a9f4",
    blue900: "#19223f",
    gray100: "#f1f1f1",
    gray500: "#72788b",
    gray900: "#757575",
    red: "#f22c51",
    lime: "#2ecc71",
    gradient1:  "#19223f",
    gradient2: "#03a9f4",
  },
  typography: {
    textXs: "0.75rem",
    textSm: "0.875rem",
    textMd: "1rem",
    textLg: "1.125rem",
    textXl: "1.25rem",
    weightSm: 400,
    weightMd: 500,
    weightLg: 600,
    weightXl: 700,
    spaceSm: 1.2,
    spaceMd: 1.3,
    spaceLg: 1.5,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.02em"
  },
  buttonSize: {
    small:{
      fontSize: '1rem',
      padding: '0.5em 0.8em'
    },
    medium: {
      fontSize: "1.125rem",
      padding: '0.5em 0.8em'
    },
    large: {
      fontSize: "1.25rem",
      padding: '0.5em 0.8em'
    }
  },
  buttonColors: {
    primary: {
      background: "#03a9f4",
      color: "#f7f7f7",
    },
    secondary: {
      background: "#19223f",
      color: "#f7f7f7",
    },
    info: {
      background: "#e1f5fe",
      color: "#03a9f4",
    },
    error: {
      background: "#f22c51",
      color: "#f7f7f7",
    },
    success: {
      background: "#2ecc71",
      color: "#f7f7f7",
    },
  }
}

export const darkTheme: DefaultTheme = {
  transition: {
    all02: "all 0.2s ease",
    all03: "all 0.3s ease",
    all04: "all 0.4s ease",
    all05: "all 0.5s ease",
  },
  colors: {
    white: "#121111",
    black: "#f7f7f7",
    blue100: "#e1f5fe",
    blue500: "#03a9f4",
    blue900: "#f7f7f7",
    gray100: "#525252",
    gray500: "#72788b",
    gray900: "#757575",
    red: "#f22c51",
    lime: "#2ecc71",
    gradient1:  "#19223f",
    gradient2: "#03a9f4",
  },
  typography: {
    textXs: "0.75rem",
    textSm: "0.875rem",
    textMd: "1rem",
    textLg: "1.125rem",
    textXl: "1.25rem",
    weightSm: 400,
    weightMd: 500,
    weightLg: 600,
    weightXl: 700,
    spaceSm: 1.2,
    spaceMd: 1.3,
    spaceLg: 1.5,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "0.02em"
  },
  buttonSize: {
    small:{
      fontSize: '1rem',
      padding: '0.7em 1em',
    },
    medium: {
      fontSize: "1.125rem",
      padding: '0.7em 1em'
    },
    large: {
      fontSize: "1.25rem",
      padding: "0.7em 1em"
    }
  },
  buttonColors: {
    primary: {
      background: "#03a9f4",
      color: "#f7f7f7",
    },
    secondary: {
      background: "#19223f",
      color: "#f7f7f7",
    },
    info: {
      background: "#e1f5fe",
      color: "#03a9f4",
    },
    error: {
      background: "#f22c51",
      color: "#f7f7f7",
    },
    success: {
      background: "#f22c51",
      color: "#2ecc71",
    },
  }
}
