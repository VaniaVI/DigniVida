import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import PerfilBeneficiario from './pages/PerfilBeneficiario/PerfilBeneficiario';
import BeneficiarioSeguimiento from './pages/BeneficiarioSeguimiento/BeneficiarioSeguimiento';
import Login from './pages/Login/login';
import VerificacionSms from './pages/VerificacionSms/verificacionsms';
import BeneficiarioDashboard from './pages/BeneficiarioDashboardReact/BeneficiarioDashboard';
import Layout from './pages/Layout';




export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        
        <Route path="/" element={<Layout/>}>
            <Route path="/verificacionsms" element={<VerificacionSms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />}  />
            <Route path="/perfilBeneficiario" element={<PerfilBeneficiario />} />
            <Route path="/beneficiarioSeguimiento" element={<BeneficiarioSeguimiento />} />
            <Route path="/beneficiarioDashboard" element={<BeneficiarioDashboard />} />
        </Route>
        </>
    )
)