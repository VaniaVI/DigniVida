// import '../../index.css';
// import React, { useState } from 'react';

import { Link } from "react-router";


// export default function VerificacionSMS() {
//     const [telefono, setTelefono] = useState('');
//     const [codigo, setCodigo] = useState('');
//     const [paso, setPaso] = useState(1);

//     const enviarSMS = async () => {
//         console.log('Enviando SMS a', telefono);
//         setPaso(2);
//     };

//     const verificarCodigo = async () => {
//         console.log('Verificando código:', codigo);
//         alert('¡Teléfono verificado con éxito!');
//     };

//     return (
//         <div classNameName="sms-verification">
//             {paso === 1 ? (
//                 <form onSubmit={(e) => { e.preventDefault(); enviarSMS(); }}>
//                     <h2>Verificación SMS</h2>
//                     <label htmlFor="telefono">Número de teléfono:</label>
//                     <input
//                         type="tel"
//                         id="telefono"
//                         value={telefono}
//                         onChange={(e) => setTelefono(e.target.value)}
//                         placeholder="+56 9 1234 5678"
//                         required
//                     />
//                     <button type="submit">Enviar código</button>
//                 </form>
//             ) : (
//                 <form onSubmit={(e) => { e.preventDefault(); verificarCodigo(); }}>
//                     <h2>Ingresa el código</h2>
//                     <label htmlFor="codigo">Código recibido:</label>
//                     <input
//                         type="text"
//                         id="codigo"
//                         value={codigo}
//                         onChange={(e) => setCodigo(e.target.value)}
//                         placeholder="123456"
//                         required
//                     />
//                     <button type="submit">Verificar</button>
//                 </form>
//             )}
//         </div>
//     );
// }


const verificacionSMS = () => {
    return(
        <section className="auth-section">
        <div className="container">
            <div className="auth-container">
                <h2 className="auth-title">Verificación SMS</h2>
                <p className="auth-subtitle">Hemos enviado un código de verificación a tu teléfono</p>
                
                <form id="verification-form" className="auth-form" action="index.html">
                    <div className="form-group">
                        <label for="codigo">Código de verificación</label>
                        <div className="verification-code-container">
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                            <input type="text" maxlength="1" className="verification-code-input" required/>
                        </div>
                    </div>
                    
                    <div className="verification-message success-message" style={{display: 'none'}}>
                        <p>¡Código verificado correctamente! Tu cuenta ha sido creada.</p>
                    </div>
                    
                    <div className="verification-message error-message" style={{display: 'none'}}>
                        <p>Código inválido. Intenta de nuevo.</p>
                    </div>
                    
                    <div className="form-group">
                        <p className="resend-code">¿No recibiste el código? <a href="#">Reenviar código</a></p>
                        <p className="countdown">Puedes solicitar un nuevo código en: <span>02:00</span></p>
                    </div>
                        <Link to="/beneficiarioDashboard"><button type="submit" className="btn btn-primary btn-block">Verificar</button></Link>
                </form>
                
                <div className="auth-footer">
                    <p><a href="index.html">Volver al inicio</a></p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default verificacionSMS;