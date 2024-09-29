import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // hook react into native html world 
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render( // we want to render App. DOM element with id of root is container for react app
  // now we can use html like structure in app component. Overall, react is hooked to the root part of html and takes control of it, like 
  // update its ui. pretty much replaces the stuff in root html with react App compoennets now.
  <StrictMode>
    <App />
  </StrictMode>,
)
