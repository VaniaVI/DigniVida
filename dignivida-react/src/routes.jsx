import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import PerfilBeneficiario from './pages/PerfilBeneficiario/PerfilBeneficiario';
import BeneficiarioSeguimiento from './pages/BeneficiarioSeguimiento/BeneficiarioSeguimiento';
import Layout from './pages/Layout';
<<<<<<< HEAD
import Login from './pages/Login';
import VerificacionSms from './pages/VerificacionSms/verificacionsms';
=======
import BeneficiarioDashboard from './pages/BeneficiarioDashboardReact/BeneficiarioDashboard';
>>>>>>> main

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/verificacionsms" element={<VerificacionSms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />}  />
            <Route path="/perfilBeneficiario" element={<PerfilBeneficiario />} />
            <Route path="/beneficiarioSeguimiento" element={<BeneficiarioSeguimiento />} />
            <Route path="/beneficiarioDashboard" element={<BeneficiarioDashboard />} />
        </Route>
        </>
    )
)