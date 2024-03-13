import { useState, useEffect } from 'react'
import { EVENTS } from '../assets/consts'
export function Router({ routes, defaultComponent2: DefaultComponent = () => null }) {
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
  return Page ? <Page /> : <DefaultComponent />
}
