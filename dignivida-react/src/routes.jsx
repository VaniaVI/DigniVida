import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/login';
import RegistroBeneficiarioReact from './pages/RegistroBeneficiarioReact/Registrobenereact';
import VerificacionSms from './pages/VerificacionSms/verificacionsms';
import BeneficiarioDashboard from './pages/BeneficiarioDashboardReact/BeneficiarioDashboard';
import BeneficiarioSoliAcompañamiento from './pages/BenSoliciAcompañamientoReact/BenSoliciReact'
import BeneficiarioSolicitadoReact from './pages/BeneficiarioSolicitadoReact/BeneficiarioSolicitadoReact';
import BeneficiarioHistorial from './pages/BeneficiarioHistorial';
import PerfilBeneficiario from './pages/PerfilBeneficiario/PerfilBeneficiario';
import BeneficiarioSeguimiento from './pages/BeneficiarioSeguimiento/BeneficiarioSeguimiento';
import RegistroVoluntario from './pages/RegistroVoluntarioReact/RegistroVoluntario';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />} />
            <Route path="/registroBeneficiario" element={<RegistroBeneficiarioReact />} />
            <Route path="/verificacionsms" element={<VerificacionSms />} />
            <Route path="/beneficiarioDashboard" element={<BeneficiarioDashboard />} />
            <Route path="/beneficiarioSolicitaAcompa" element={<BeneficiarioSoliAcompañamiento/>} />
            <Route path="/beneficiarioSolicitado" element={<BeneficiarioSolicitadoReact />} />
            <Route path="/beneficiarioHistorial" element={<BeneficiarioHistorial/>} />  
            <Route path="/perfilBeneficiario" element={<PerfilBeneficiario />} /> 
            <Route path="/beneficiarioSeguimiento" element={<BeneficiarioSeguimiento />} /> 
            <Route path="/beneficiarioSeguimiento" element={<BeneficiarioSeguimiento />} /> 
            <Route path="/registroVoluntario" element={<RegistroVoluntario />} /> 
            
        </Route>
        </>
    )
)