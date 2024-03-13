import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { useState, useEffect } from 'react'
import { EVENTS } from './assets/consts.js'

const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage }
]

function Router({ routes, defaultComponent: DefaultComponent = () => null }) {
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

  const Page = routes.find((el) => el.path === currentPath)
}

function App() {
  return (
    <main>
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
