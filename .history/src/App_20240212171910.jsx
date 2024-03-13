import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

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
  }, [])

  return (
    <main>
      {currentPath === '/home' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
