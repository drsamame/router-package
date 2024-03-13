import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
  const path = window.location.pathname
  return (
    <main>
      {
        path === 'home' && HomePage
      }
      <AboutPage />
    </main>
  )
}

export default App
