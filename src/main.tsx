import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import store from './redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>   
		<Provider store={store}>
      		<Home />
    	</Provider>
  	</React.StrictMode>
)
