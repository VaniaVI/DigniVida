import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollToTop from '../hooks/ScrollToTop';
import Header2 from '../components/Header2/Header2';
import Header3 from '../components/Header3/Header3';


const Layout = () => {
    const location = useLocation();
    // Agrega aquí todas las rutas donde NO quieres mostrar el header
    const hideHeaderRoutes = [
        "/verificacionsms",
        "/beneficiarioDashboard",
        "/voluntarioDashboard",
        "/beneficiarioSeguimiento",
        "/beneficiarioSolicitaAcompa",
        "/beneficiarioHistorial",
        "/perfilBeneficiario",
        "/voluntarioTareas",
        "/voluntarioOportunidades",
        "/perfilVoluntario"


        // agrega más rutas si lo necesitas
    ];
        //Beneficiario
        const hideHeader2Routes = [
        "/",
        "/login",
        "/registroBeneficiario",
        "/verificacionsms",
        "/registroVoluntario",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",
        "/preguntasFrecuentes",
        "/verificacionSMSbene",
        "/voluntarioDashboard",
        "/voluntarioTareas",
        "/voluntarioOportunidades",
        "/perfilVoluntario"
        
        
 
        
        // agrega más rutas si lo necesitas
    ];
        //Voluntario
        const hideHeader3Routes = [
        "/",
        "/login",
        "/registroBeneficiario",
        "/verificacionsms",
        "/registroBeneficiario",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",
        "/PreguntasFrecuentes",
        "/verificacionSMSbene",
        "/perfilBeneficiario",
        "/beneficiarioDashboard",
        "/beneficiarioSolicitaAcompa",
        "/beneficiarioHistorial",
            
        
        // agrega más rutas si lo necesitas
    ];

    const hideHeader = hideHeaderRoutes.includes(location.pathname);
    const hideHeader2 = hideHeader2Routes.includes(location.pathname);
    const hideHeader3 = hideHeader3Routes.includes(location.pathname);



    return (
        <div>
            <ScrollToTop />
            {!hideHeader && <Header />}
            {!hideHeader2 && <Header2 />}
            {!hideHeader3 && <Header3 />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
