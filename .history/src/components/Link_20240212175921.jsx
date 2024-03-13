import { EVENTS } from '../assets/consts'
export function navigate(href) {
  window.history.pushState({}, {}, href)
  const navigationEvent = new Event(EVENTS.PUSHTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, ...props }) {
  const handleClick = () => {
    navigate(to)
  }
  return (
    <>
      <a href='to' onClick={() => handleClick()}>Ir a Sobre nosotros</a>
    </>
  )
}
