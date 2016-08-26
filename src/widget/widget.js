import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { v4 } from 'node-uuid';
import configureStore from './store';
import Main from './components/Main';

injectTapEventPlugin();

const container = document.createElement('div');
container.id = `widget_${v4()}`;
document.body.appendChild(container);

const store = configureStore();

render(
  <Provider store={store}>
    <Main/>
  </Provider>,
  container
);