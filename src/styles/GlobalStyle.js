import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
  }
body{
  margin:0;
  padding:0;
  background-color: #101010;
  font-family: 'Martel Sans', sans-serif;
}
a{
  text-decoration: none;
  color:#f2f2f2;
  &:hover{
    color:white;
  }
}
`;
export default GlobalStyle;
