import {createGlobalStyle} from 'styled-components';


export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-image: url('./sw-bg.jpg');
  background-size: cover;
}
.App {
  text-align: center;
}
.Header {
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
}
`;