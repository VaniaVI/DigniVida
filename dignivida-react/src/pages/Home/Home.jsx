import { Link } from 'react-router-dom';
import voluntarios from '../../assets/voluntarios.jpg';
import manosAyuda from '../../assets/manosAyuda.jpg'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <section id="hero">
        <div className="container">
            <div className="hero-content">
                <h2>Dignivida es amor, cuidado y bienestar</h2>
                <p>Conectamos adultos mayores y personas con discapacidad con voluntarios comprometidos que los acompañarán a citas médicas, trámites bancarios y más.</p>
                <div className="hero-buttons">
                    <a href="/registro-beneficiario.html" className="btn btn-primary btn-large">Solicitar Acompañamiento</a>
                    <a href="/registro-voluntario.html" className="btn btn-secondary btn-large" id="btn-ser-voluntario">Ser Voluntario</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={manosAyuda} alt="Voluntario acompañando a una persona mayor"/>
            </div>
        </div>
    </section>

    <section id="servicios">
        <div className="container">
            <h2 className="section-title">Nuestros Servicios</h2>
            <div className="services-grid">
                <div className="service-card">
                    <div className="service-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/9411/9411437.png" alt="Icono médico"/>
                    </div>
                    <h3>Citas Médicas</h3>
                    <p>Acompañamiento a consultas médicas, exámenes y recogida de medicamentos.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/5045/5045121.png" alt="Icono banco"/>
                    </div>
                    <h3>Trámites Bancarios</h3>
                    <p>Ayuda con gestiones bancarias, pagos y trámites financieros.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/3394/3394009.png" alt="Icono compras"/>
                    </div>
                    <h3>Compras</h3>
                    <p>Asistencia para realizar compras en supermercados y tiendas.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/860/860183.png" alt="Icono social"/>
                    </div>
                    <h3>Actividades Sociales</h3>
                    <p>Compañía para paseos, eventos culturales y actividades recreativas.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="como-funciona">
        <div className="container">
            <h2 className="section-title">¿Cómo Funciona?</h2>
            <div className="steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <h3>Regístrate</h3>
                    <p>Crea una cuenta gratuita como usuario o como voluntario.</p>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <h3>Solicita Ayuda</h3>
                    <p>Indica qué tipo de acompañamiento necesitas, fecha y hora.</p>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <h3>Conecta</h3>
                    <p>Te pondremos en contacto con un voluntario disponible.</p>
                </div>
                <div className="step">
                    <div className="step-number">4</div>
                    <h3>Recibe Apoyo</h3>
                    <p>El voluntario te acompañará a donde necesites ir.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonios">
        <div className="container">
            <h2 className="section-title">Testimonios</h2>
            <div className="testimonials">
                <div className="testimonial">
                    <div className="testimonial-content">
                        <p>"Gracias a digniVida puedo ir a mis citas médicas sin preocuparme. Los voluntarios son amables y pacientes."</p>
                    </div>
                    <div className="testimonial-author">
                         {/* <img src="user1.jpg" alt="Foto de Vania">  */}
                        <div>
                            <h4>Carmen Rodríguez</h4>
                            <p>78 años</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-content">
                        <p>"Ser voluntario en digniVida me ha permitido conocer personas maravillosas y sentir que realmente estoy haciendo una diferencia."</p>
                    </div>
                    <div className="testimonial-author">
                        {/* <img src="user2.jpg" alt="Foto de Miguel"> */}
                        <div>
                            <h4>Miguel Sánchez</h4>
                            <p>Voluntario</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="voluntarios">
        <div className="container">
            <div className="volunteer-content">
                <h2>Únete a Nuestro Equipo de Voluntarios</h2>
                <p>Tu tiempo y compañía pueden hacer una gran diferencia en la vida de quienes más lo necesitan. Conviértete en voluntario y ayuda a crear una comunidad más solidaria.</p>
                <a href="#" className="btn btn-primary" id="btn-ser-voluntario-2">Ser Voluntario</a>
            </div>
            <div className="volunteer-image">
                <img src={voluntarios} alt="Grupo de voluntarios sonrientes"/>
            </div>
        </div>
    </section>

    <section id="contacto">
        <div className="container">
            <h2 className="section-title">Contáctanos</h2>
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Dirección</h3>
                        <p>Av. Principal 123, Santiago</p>
                    </div>
                    <div className="contact-item">
                        <h3>Teléfono</h3>
                        <p>+56944556677</p>
                    </div>
                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>info@dignivida.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Horario de Atención</h3>
                        <p>Lunes a Viernes: 9:00 - 18:00</p>
                    </div>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required/>
                        </div>
                        <div className="form-group">
                            <label for="mensaje">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

     {/* Modal de selección de tipo de usuario  */}
    <div className="modal" id="modal-registro">
        <div className="modal-content">
            <span className="close-modal">&times;</span>
            <h2 className="auth-title">Elige tipo de registro</h2>
            <p className="auth-subtitle">Selecciona el tipo de cuenta que deseas crear</p>
            
            <div className="user-type-selection">
                <a href="registro-beneficiario.html" className="user-type-card">
                    <div className="user-type-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/7433/7433296.png" alt="Icono pasajero"/>
                    </div>
                    <h3>Beneficiario</h3>
                    <p>Para adultos mayores o personas con movilidad reducida que necesitan acompañamiento</p>
                </a>
                
                <a href="registro-voluntario.html" className="user-type-card">
                    <div className="user-type-icon">
                        <img src="https://cdn-icons-png.flaticon.com/128/4148/4148613.png" alt="Icono voluntario"/>
                    </div>
                    <h3>Voluntario</h3>
                    <p>Para personas que desean ofrecer su tiempo y ayuda a quienes lo necesitan</p>
                </a>
            </div>
        </div>
    </div>
</div>
    );
}

export default Home;