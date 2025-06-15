import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { FaRegFileAlt, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

const sections = [
    {
        icon: <FaRegFileAlt size={32} color="var(--primary-color)" />,
        title: 'Uso del Sitio',
        content:
            'El usuario se compromete a utilizar el sitio de manera responsable, respetando la ley y las buenas costumbres. No está permitido el uso indebido de la plataforma ni la realización de actividades ilícitas.',
    },
    {
        icon: <FaShieldAlt size={32} color="var(--primary-color)" />,
        title: 'Propiedad Intelectual',
        content:
            'Todos los contenidos, marcas, logos y diseños presentes en este sitio son propiedad de la empresa o de sus licenciantes. Queda prohibida su reproducción total o parcial sin autorización previa.',
    },
    {
        icon: <FaCheckCircle size={32} color="var(--primary-color)" />,
        title: 'Modificaciones',
        content:
            'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán comunicados oportunamente y el uso continuado del sitio implica la aceptación de los mismos.',
    },
];

const TerminosYCondiciones = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <section className="auth-section" style={{ background: 'var(--background-alt)' }}>
            <div className="auth-container" style={{ maxWidth: 700 }}>
                <h1 className="section-title" style={{ marginBottom: 30 }}>Términos y Condiciones</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: 35 }}>
                    Bienvenido a nuestro sitio web. Al acceder o utilizar nuestros servicios, aceptas los siguientes términos y condiciones de uso.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
                    {sections.map(({ icon, title, content }, idx) => (
                        <div
                            key={title}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 20,
                                background: 'var(--background-alt)',
                                borderRadius: 10,
                                padding: '22px 20px',
                                boxShadow: '0 2px 8px var(--shadow-color)',
                                borderLeft: `6px solid var(--primary-color)`,
                                animation: `modalFadeIn 0.4s ${0.1 * idx}s both`,
                            }}
                        >
                            <div style={{
                                minWidth: 40,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {icon}
                            </div>
                            <div>
                                <h2 style={{
                                    marginBottom: 8,
                                    color: 'var(--primary-dark)',
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                }}>
                                    {title}
                                </h2>
                                <p style={{ color: 'var(--text-color)' }}>{content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                    {/*<Link to="/" className="btn btn-primary btn-large" style={{ borderRadius: 8 }}>Volver</Link>*/}
                    <button onClick={handleGoBack} className="btn btn-primary btn-large" style={{ borderRadius: 8 }}>Volver</button>
                </div>
            </div>
        </section>
    );
};

export default TerminosYCondiciones;