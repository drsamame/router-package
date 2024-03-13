import { useState, useEffect, Children } from 'react'
import { EVENTS } from '../assets/consts'
import { match } from 'path-to-regexp'

export function Router({
  children,
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

  let routeParams = {}

  const routesFromChildren = Children.map(children => {
    console.log(children)
    return children
  })
  console.log(routesFromChildren)

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false
    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
