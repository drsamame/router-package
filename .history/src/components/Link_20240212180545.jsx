import { EVENTS, BUTTONS } from '../assets/consts'
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
  const isMainEvent = event.button === BUTTONS.primary // primary click
  const isModifiedEvent =
    event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
  const isManageableEvent = target === undefined || target === '_self'

  if (isMainEvent && isManageableEvent && !isModifiedEvent) {
    event.preventDefault()
    navigate(to)
  }

  return (
    <>
      <a href={to} target={target} {...props} onClick={handleClick}>
        Ir a Sobre nosotros
      </a>
    </>
  )
}
