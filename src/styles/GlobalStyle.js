import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
  }
body{
  margin:0;
  padding:0;
  background-color:#2f2f2f;
  font-family: 'Noto Sans TC', sans-serif;
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
