import { navigate } from '../App'
export function Link({ route }) {
  return (
    <>
      <button onClick={() => navigate('/about')}>Ir a Sobre nosotros</button>
    </>
  )
}
