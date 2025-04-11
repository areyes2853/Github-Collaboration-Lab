import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contact from './components/contactUs'
import Welcome from './components/welcome'
import History from './components/history'

const App = () => {
  return (
    <>
      <Welcome />
      <History />
      <Contact />
    </>
  )
};

export default App
