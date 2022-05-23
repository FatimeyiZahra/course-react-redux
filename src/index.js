import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "./redux/store/store";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import 'alertifyjs/build/css/alertify.min.css'


const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
