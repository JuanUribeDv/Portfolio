import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VistaPrincipal from './Pages/VistaPrincipal'

function App() {
  

  return (
    <Router>
      <div className="menu">
        <Routes>
          <Route path="/" element={<VistaPrincipal />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
