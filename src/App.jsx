import HomePage from './pages/Home.jsx'
import Page404 from './pages/404.jsx'
import { lazy, Suspense } from 'react'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

const lazyAboutPage = lazy(() => import('./pages/About.jsx'))

function App() {
  const appRoutes = [
    {
      path: '/:lang/about',
      Component: lazyAboutPage
    },
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Buscador: {routeParams.query}</h1>
    }
  ]
  return (
    <main>
      <Suspense fallback={<h1>loading...</h1>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={lazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
