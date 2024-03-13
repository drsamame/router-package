import Page404 from './pages/404.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'


function App() {
  return (
    <main>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
        </Router>
    </main>
  )
}

export default App
