export default function Login() {
    return (
        <div className="login">
            <main className="auth-main">
                <div className="auth-container">
                    <h2 className="auth-title">Iniciar Sesión</h2>
                    <p className="auth-subtitle">Accede a tu cuenta para solicitar o brindar acompañamiento</p>
                    <form className="auth-form" action="#" method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="usuario@ejemplo.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Contraseña" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                    </form>
                    <div className="auth-link">
                        <p>¿No tienes cuenta? <a href="registro-pasajero.html" id="btn-registro-link">Regístrate</a></p>
                    </div>
                </div>
            </main>
        </div>
    );
}