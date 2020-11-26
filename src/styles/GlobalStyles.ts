import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing:border-box;
  outline:none;
}

body {
  background-color:#d2dbdc;
  font-family: 'Segoe UI',Helvetica Neue, Helvetica, Lucida Grande, Arial;
}
`;

export default GlobalStyle;
