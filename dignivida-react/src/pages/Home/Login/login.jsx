export default function LoginReact(){
    return(
        <div>ClassName="login-react"
                <main class="auth-main">
        <div class="auth-container">
            <h2 class="auth-title">Iniciar Sesión</h2>
            <p class="auth-subtitle">Accede a tu cuenta para solicitar o brindar acompañamiento</p>
            <form class="auth-form" action="#" method="POST">
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="usuario@ejemplo.com" required/>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="Contraseña" required/>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
            </form>
            <div class="auth-link">
                <p>¿No tienes cuenta? <a href="registro-pasajero.html" id="btn-registro-link">Regístrate</a></p>
            </div>
        </div>
    </main>
        </div>
    )
}