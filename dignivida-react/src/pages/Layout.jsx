import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollToTop from '../hooks/ScrollToTop';
import Header2 from '../components/Header2/Header2';



const Layout = () => {
    const location = useLocation();
    // Agrega aquí todas las rutas donde NO quieres mostrar el header
    const hideHeaderRoutes = [
        "/verificacionsms",
        "/beneficiarioDashboard",
 
        
        // agrega más rutas si lo necesitas
    ];
        const hideHeader2Routes = [
        "/"
        
 
        
        // agrega más rutas si lo necesitas
    ];

    const hideHeader = hideHeaderRoutes.includes(location.pathname);
    const hideHeader2 = hideHeader2Routes.includes(location.pathname);


    return (
        <div>
            <ScrollToTop />
            {!hideHeader2 && <Header2 />}
            {!hideHeader && <Header />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
