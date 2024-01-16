import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import OAuthProvider from './context/OAuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <OAuthProvider> */}
      <App />
    {/* </OAuthProvider> */}
  </React.StrictMode>,
)
