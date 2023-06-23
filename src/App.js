import './App.scss';
import React, { useEffect, useState } from "react"
import MainComponent from './components/MainContent'
import Navbar from './components/Navbar'

export default function App() {
  const[darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
      console.log("Toggled")
      setDarkMode(prevMode =>! prevMode);
  }

  return (
    <div className="container">
      <Navbar 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}/>
      <MainComponent 
      darkMode={darkMode}/>
    </div>
  )
}