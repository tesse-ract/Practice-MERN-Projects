import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from "@auth0/auth0-react"

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-htkykuhxndook8er.us.auth0.com"
    clientId="CtINwVDPZzJE7bIfZCTBf95naQL3Jqov"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
