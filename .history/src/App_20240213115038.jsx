import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'

function App() {
  const appRoutes = [
    { path: '/home', Component: HomePage },
    { path: '/about', Component: AboutPage },
    {
      path: '/search/:query',
      Component: ({ routeParams }) => <h1>Buscador: {routeParams.query}</h1>
    }
  ]
  return (
    <main>
      <Router
        routes={appRoutes}
        defaultComponent={Page404}
        < Route />
      />
    </main>
  )
}

export default App
