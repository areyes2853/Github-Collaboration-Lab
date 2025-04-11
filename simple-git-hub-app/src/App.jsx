import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contact from './components/contactUs'
import './App.css'
import Welcome from './components/welcome'

const App = () => {
  return (
    <>
    <Welcome />
    <Contact />
    </>
  )
};

export default App
