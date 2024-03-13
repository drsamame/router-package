import { EVENTS } from './assets/consts.js'
export function navigate(href) {
  window.history.pushState({}, {}, href)
  const navigationEvent = new Event(EVENTS.PUSHTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, ...props }) {
  const handleClick = () => {}
  return (
    <>
      <a onClick={() => handleClick(e)}>Ir a Sobre nosotros</a>
    </>
  )
}
