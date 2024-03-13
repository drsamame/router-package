import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState } from 'react'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  function navigate(href) {
    window.history.pushState({}, href)
    const navitationEvent = new Event('pushtate')
  }
  return (
    <main>
      {currentPath === '/home' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
