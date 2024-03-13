import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import { Router } from './components/Router.jsx'

const routes = [
  { path: '/home', Component: HomePage },
  { path: '/about', Component: AboutPage },
  { path: '/twitch', Component: () => <h1>TWICHT</h1> }
]

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}

export default App
