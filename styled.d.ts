import { Theme } from "@/@types/theme.types";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
