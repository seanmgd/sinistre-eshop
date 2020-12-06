import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { AppProviders } from './AppProviders'
import './i18n'
import * as serviceWorker from './serviceWorker'
import { initializedFirebaseApp } from './services/firebase/init-fcm'

global.APP_VERSION = process.env.REACT_APP_VERSION
global.APP_NAME = process.env.REACT_APP_NAME

const mountingPoint = document.getElementById(
  process.env.REACT_APP_MOUNTING_POINT_ID,
)

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  mountingPoint,
)
initializedFirebaseApp()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
