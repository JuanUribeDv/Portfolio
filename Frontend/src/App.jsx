import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VistaPrincipal from './Pages/VistaPrincipal'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VistaPrincipal />} />
      </Routes>
    </Router>
  )
}

export default App
