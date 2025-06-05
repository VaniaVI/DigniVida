import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
    return(
        <div>
            <ScrollToTop />
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;