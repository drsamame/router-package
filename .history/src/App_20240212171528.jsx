import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState } from 'react'

const NAVIGATIONEVENT = 'pushtate'
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  function navigate(href) {
    window.history.pushState({}, href)
    const navigationEvent = new Event(NAVIGATIONEVENT)
    window.dispatchEvent(navigationEvent)
  }
  return (
    <main>
      {currentPath === '/home' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
