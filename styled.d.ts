import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    transition: {
      all02: string
      all03: string
      all04: string
      all05: string
    }
    colors: {
      [key: string]: string;
      white: string;
      black: string;
      blue100: string;
      blue500: string;
      blue900: string;
      gray100: string;
      gray500: string;
      gray900: string;
      red: string;
      lime: string;
      gradient1: string;
      gradient2: string;
    };
    typography: {
      textXs: string;
      textSm: string;
      textMd: string;
      textLg: string;
      textXl: string;
      weightSm: number;
      weightMd: number;
      weightLg: number;
      weightXl: number;
      spaceSm: number;
      spaceMd: number;
      spaceLg: number;
      fontFamily: string;
      letterSpacing: string;
    };
    buttonSize: {
      [key: string]: {
        fontSize: string;
        padding: string;
      };
      small: {
        fontSize: string;
        padding: string;
      };
      medium: {
        fontSize: string;
        padding: string;
      };
      large: {
        fontSize: string;
        padding: string;
      };
    };
    buttonColors: {
      [key: string]: {
        background: string;
        color: string;
      };
      primary: {
        background: string;
        color: string;
      };
      secondary: {
        background: string;
        color: string;
      };
      error: {
        background: string;
        color: string;
      };
      info: {
        background: string;
        color: string;
      };
      success: {
        background: string;
        color: string;
      };
    }
  }
}