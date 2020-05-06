import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './styles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <div>Hi</div>
  </>,
  document.getElementById('root')
);


serviceWorker.unregister();