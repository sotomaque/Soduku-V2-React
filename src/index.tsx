import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content, Title } from './components';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Soduku</Title>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();