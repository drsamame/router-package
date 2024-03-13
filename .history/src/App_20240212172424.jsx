import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState, useEffect } from 'react'

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
    window.addEventListener(NAVIGATIONEVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATIONEVENT, onLocationChange)
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
