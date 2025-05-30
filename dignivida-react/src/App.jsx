import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import PerfilBeneficiario from './pages/PerfilBeneficiario/PerfilBeneficiario';
import './App.css'

function App() {

  return (
    // <Router>
    //   <Header /> 

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/perfilBeneficiario" element={<PerfilBeneficiario />} />
    //   </Routes>

    //   <Footer />
    // </Router>
    <Header /> 
  )
}

export default App
