import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './serviceWorker';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>Hi</div>
  </ThemeProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();