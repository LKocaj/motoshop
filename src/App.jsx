import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import useScrollToHash from './hooks/useScrollToHash'

function App() {
  useScrollToHash()

  return (
    <div className="min-h-dvh flex flex-col bg-zinc-950 text-zinc-300">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
