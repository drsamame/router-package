import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import Page404 from './pages/404.jsx'
import { Router } from './components/Router.jsx'

const routes = function App() {
  return (
    <main>
      <Router
        routes={[
          { path: '/home', Component: HomePage },
          { path: '/about', Component: AboutPage }
        ]}
        defaultComponent={Page404}
      />
    </main>
  )
}

export default App
