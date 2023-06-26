import './App.scss';
import React, { useEffect, useState } from "react"
import MainComponent from '../components/MainContent'
import Navbar from '../components/Navbar'

export default function App() {
  // https://scrimba.com/learn/learnreact/warm-up-add-dark-light-modes-to-reactfacts-site-co5924409bb476cc78b0d818a
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    console.log("Toggled")
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="container">
      <Navbar
        darkMode2={darkMode}
        toggleDarkMode2={toggleDarkMode}
      />
      <MainComponent
        darkMode2={darkMode} />
    </div>
  )
}