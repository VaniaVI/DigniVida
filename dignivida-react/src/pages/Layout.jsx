import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Footer2 from '../components/Footer2/Footer2';
import Footer3 from '../components/Footer3/Footer3';
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
        "/perfilVoluntario",
        "/beneficiarioSolicitado",

        // agrega más rutas si lo necesitas
    ];

    const hideFooterRoutes = [
        "/verificacionsms",
        "/beneficiarioDashboard",
        "/voluntarioDashboard",
        "/beneficiarioSeguimiento",
        "/beneficiarioSolicitaAcompa",
        "/beneficiarioHistorial",
        "/perfilBeneficiario",
        "/voluntarioTareas",
        "/voluntarioOportunidades",
        "/perfilVoluntario",
        "/beneficiarioSolicitado",
        "/preguntasFrecuentes",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",


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

    const hideFooter2Routes = [
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
        "/perfilVoluntario",
        "/preguntasFrecuentes",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",
               
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
        "/preguntasFrecuentes",
        "/verificacionSMSbene",
        "/perfilBeneficiario",
        "/beneficiarioDashboard",
        "/beneficiarioSolicitaAcompa",
        "/beneficiarioHistorial",
        "/beneficiarioSeguimiento",
        "/beneficiarioSolicitado",
        "/registroVoluntario"
        // agrega más rutas si lo necesitas
    ];

        const hideFooter3Routes = [
        "/",
        "/login",
        "/registroBeneficiario",
        "/verificacionsms",
        "/registroBeneficiario",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",
        "/preguntasFrecuentes",
        "/verificacionSMSbene",
        "/perfilBeneficiario",
        "/beneficiarioDashboard",
        "/beneficiarioSolicitaAcompa",
        "/beneficiarioHistorial",
        "/beneficiarioSeguimiento",
        "/beneficiarioSolicitado",
        "/registroVoluntario",
        "/preguntasFrecuentes",
        "/terminosYCondiciones",
        "/politicasDePrivacidad",
        
        // agrega más rutas si lo necesitas
    ];



    const hideHeader = hideHeaderRoutes.includes(location.pathname);
    const hideFooter = hideFooterRoutes.includes(location.pathname);
    const hideHeader2 = hideHeader2Routes.includes(location.pathname);
    const hideFooter2 = hideFooter2Routes.includes(location.pathname);
    const hideHeader3 = hideHeader3Routes.includes(location.pathname);
    const hideFooter3 = hideFooter3Routes.includes(location.pathname);



    return (
        <div>
            <ScrollToTop />
            {!hideHeader && <Header />}
            {!hideHeader2 && <Header2 />}
            {!hideHeader3 && <Header3 />}
            <Outlet />
            {!hideFooter && <Footer />}
            {!hideFooter2 && <Footer2 />}
            {!hideFooter3 && <Footer3 />}
        </div>
    );
};

export default Layout;
