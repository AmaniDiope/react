import React from 'react'
import Nav from './comp/Nav'
import {BrowserRouter} from 'react-router-dom'
import Rout from './comp/rout'
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav />
   <Rout />
    </BrowserRouter>
    </div>
  )
}

export default App
