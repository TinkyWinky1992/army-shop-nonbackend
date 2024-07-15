import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/Cart';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)


/*

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './components/Cart';
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
  </Provider>

  document.getElementById('root')
)

*/