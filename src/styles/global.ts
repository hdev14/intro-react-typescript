import {createGlobalStyle} from 'styled-components';

import background from '../assets/background.svg';

const global = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #F0F0F5 url(${background}) 70% top no-repeat;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
`;

export default global;
