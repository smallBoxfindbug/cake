import React from "react"
import reactDom from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

import App from "./App"

reactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>
  , document.getElementById("root"))