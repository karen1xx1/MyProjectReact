import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.style.scss"
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Components/ctx/UserCTX.jsx'
import { ProdutsProvider } from './Components/ctx/ProductsBasketCTX.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <ProdutsProvider>
          <App />
        </ProdutsProvider>
      </UserProvider>
    </React.StrictMode>,
  </BrowserRouter>
)
