import { useState, useEffect } from 'react'
import { EVENTS } from '../assets/consts.js'
import { Page404 } from '../pages/404.jsx'
export function Router({
  routes,
  defaultComponent: Page404
}) {
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

  const Page = routes.find((el) => el.path === currentPath)?.Component
  return Page ? <Page /> : Page404
}
