import React, { useState } from 'react';

export default function VerificacionSMS() {
    const [telefono, setTelefono] = useState('');
    const [codigo, setCodigo] = useState('');
    const [paso, setPaso] = useState(1);

    const enviarSMS = async () => {
        console.log('Enviando SMS a', telefono);
        setPaso(2);
    };

    const verificarCodigo = async () => {
        console.log('Verificando código:', codigo);
        alert('¡Teléfono verificado con éxito!');
    };

    return (
        <div className="sms-verification">
            {paso === 1 ? (
                <form onSubmit={(e) => { e.preventDefault(); enviarSMS(); }}>
                    <h2>Verificación SMS</h2>
                    <label htmlFor="telefono">Número de teléfono:</label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="+56 9 1234 5678"
                        required
                    />
                    <button type="submit">Enviar código</button>
                </form>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); verificarCodigo(); }}>
                    <h2>Ingresa el código</h2>
                    <label htmlFor="codigo">Código recibido:</label>
                    <input
                        type="text"
                        id="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        placeholder="123456"
                        required
                    />
                    <button type="submit">Verificar</button>
                </form>
            )}
        </div>
    );
}