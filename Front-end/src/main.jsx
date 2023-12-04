import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.jsx'
import { Provider } from 'react-redux'
import store from './Store/index.jsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
