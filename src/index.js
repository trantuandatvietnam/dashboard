import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout';
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/index.css";
import "./assets/css/theme.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from "./redux/reducers";
import { createStore } from 'redux';

document.title = "DashBoard"
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
