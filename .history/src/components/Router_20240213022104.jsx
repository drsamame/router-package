import { useState, useEffect } from 'react'
import { EVENTS } from '../assets/consts'
import { match } from 'path-to-regex'

export function Router({
  routes,
  defaultComponent: DefaultComponent = () => null
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

  const routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true
    const machetUrl = match(path, { decode: decodeURIComponent })
    const machet = machetUrl(currentPath)
    if (!machet) return false
    routeParams = macmachet.params
    return true
  })?.Component

  return Page ? <Page /> : <DefaultComponent />
}
