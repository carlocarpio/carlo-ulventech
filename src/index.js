import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './components/App'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
