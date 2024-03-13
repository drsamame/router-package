import { EVENTS, BUTTONS } from '../assets/consts'
function navigate(href) {
  window.history.pushState({}, {}, href)
  const navigationEvent = new Event(EVENTS.PUSHTATE)
  window.dispatchEvent(navigationEvent)
}
export function Link({ target, to, children, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <>
      <a href={to} target={target} {...props} onClick={handleClick}>
       {children }
      </a>
    </>
  )
}
