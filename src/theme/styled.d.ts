import "styled-componets";

interface FontsProps {
  small: string;
  medium: string;
  large: string;
}
interface ColorProps {
  primary: string;
  fontColorPrimary: string;
  danger: string;
  white: string;
  black: string;
  gray: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: FontsProps;
    colors: ColorProps;
  }
}
