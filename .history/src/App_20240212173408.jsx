import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState, useEffect } from 'react'
import { EVENTS } from './assets/consts.js'
const NAVIGATIONEVENT = 'pushtate'

function navigate(href) {
  window.history.pushState({}, href)
  const navigationEvent = new Event(NAVIGATIONEVENT)
  window.dispatchEvent(navigationEvent)
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/home' && <HomePage onClick={navigate('/about')} />}
      {currentPath === '/about' && <AboutPage onClick={navigate('/home')} />}
    </main>
  )
}

export default App
