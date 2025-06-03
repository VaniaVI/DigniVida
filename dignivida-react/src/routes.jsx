import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import PerfilBeneficiario from './pages/PerfilBeneficiario/PerfilBeneficiario';
import BeneficiarioSeguimiento from './pages/BeneficiarioSeguimiento/BeneficiarioSeguimiento';
import Layout from './pages/Layout';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home />}  />
            <Route path="/perfilBeneficiario" element={<PerfilBeneficiario />} />
            <Route path="/beneficiarioSeguimiento" element={<BeneficiarioSeguimiento />} />
        </Route>
    )
)
