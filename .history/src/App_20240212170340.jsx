import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'

function App() {
  return (
    <main>
      {JSON.stringify(window.location)}
      <HomePage />
      <AboutPage />
    </main>
  )
}

export default App
