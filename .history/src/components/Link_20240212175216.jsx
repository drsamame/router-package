import { navigate } from '../App'
export function Link({ route }) {
  return (
    <>
      <button onClick={() => navigate({ route })}>Ir a Sobre nosotros</button>
    </>
  )
}
