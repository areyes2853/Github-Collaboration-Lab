import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contact from './components/contactUs'
import Welcome from './components/welcome'
import HistoryOfOrganisation from './components/history'
import './App.css'

const App = () => {
  return (
    <>
    <Welcome />
    <HistoryOfOrganisation />
    <Contact />
    </>
  )
};

export default App
