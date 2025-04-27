import React from 'react'
import Home from './Home'
import {AppProvider} from './GloblalContext'
const App = () => {
  return (
    <AppProvider>
      <Home/>
    </AppProvider>
  )
}

export default App