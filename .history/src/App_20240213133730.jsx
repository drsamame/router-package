import HomePage from './pages/Home.jsx'
import Page404 from './pages/404.jsx'
import { lazy } from 'react'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

const lazyAboutPage = lazy(() => import('./pages/About.jsx'))

function App() {
  const appRoutes = [
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Buscador: {routeParams.query}</h1>
    }
  ]
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={lazyAboutPage} />
      </Router>
    </main>
  )
}

export default App