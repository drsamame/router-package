import { EVENTS } from './assets/consts.js'
export function navigate(href) {
  window.history.pushState({}, {}, href)
  const navigationEvent = new Event(EVENTS.PUSHTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ route }) {
  return (
    <>
      <button onClick={() => navigate({ route })}>Ir a Sobre nosotros</button>
    </>
  )
}
