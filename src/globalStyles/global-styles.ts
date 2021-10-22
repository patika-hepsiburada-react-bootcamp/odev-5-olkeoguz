import { createGlobalStyle } from 'styled-components';

type ThemeType = {
  name: string;
  color: string;
  background: string;
};

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    }
`;

export default GlobalStyles;
