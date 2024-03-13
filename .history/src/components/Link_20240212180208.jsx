import { EVENTS } from '../assets/consts'
export function navigate(href) {
  window.history.pushState({}, {}, href)
  const navigationEvent = new Event(EVENTS.PUSHTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    e.preventDefault()
    navigate(to)
  }
  return (
    <>
      <a href={to} target={target} {...props} onClick={handleClick(e)}>Ir a Sobre nosotros</a>
    </>
  )
}
