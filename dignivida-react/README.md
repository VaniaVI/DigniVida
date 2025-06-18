
# 🫶 DigniVida – Plataforma de Acompañamiento Social y Voluntariado

**DigniVida** es una aplicación web desarrollada por el equipo **RaícesVivas**, con el objetivo de conectar a personas voluntarias con beneficiarios/as que necesitan apoyo y acompañamiento. Promovemos la dignidad humana y el cuidado comunitario a través de una plataforma accesible, segura y construida con tecnologías modernas.

---

## 👥 Equipo de Desarrollo

| Nombre          | Rol                            |
|----------------|---------------------------------|
| Fabián Serrano | Fullstack Dev / Líder Técnico   |
| Yohan García   | Frontend Dev / UX               |
| Vania Vargas   | Diseño UI / Accesibilidad       |
| Smith Gómez    | Backend Dev / Seguridad         |
| Felipe Aldea   | Testing / Optimización Front    |

---

## 📁 Estructura del Proyecto

```plaintext
DIGNIVIDA/
├── dignivida-backend/
│   ├── controller/
│   │   ├── authController.js
│   │   ├── beneficiarioController.js
│   │   └── voluntarioController.js
│   ├── rutas/
│   │   ├── auth.js
│   │   ├── authLogin.js
│   │   ├── beneficiario.js
│   │   └── voluntarios.js
│   ├── uploads/
│   ├── model.js
│   ├── server.js
│   └── .env
│
├── dignivida-react/
│   ├── src/
│   │   ├── Accesibilidad/
│   │   │   └── AppChatBot.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   │   ├── useModalRegistro.jsx
│   │   │   ├── useRegionComuna.jsx
│   │   │   ├── useRegistroBeneficiario.jsx
│   │   │   ├── useRegistroVoluntario.jsx
│   │   │   └── useSeguimiento.jsx
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── Home.css
│   │   │   │   └── Home.jsx
│   │   │   ├── PerfilBeneficiario/
│   │   │   │   ├── PerfilBeneficiario.css
│   │   │   │   ├── BeneficiarioDashboard.jsx
│   │   │   │   ├── BeneficiarioHistorial.jsx
│   │   │   │   ├── BeneficiarioSeguimiento.jsx
│   │   │   │   ├── BeneficiarioSolicitadoReact.jsx
│   │   │   │   ├── BeneficiarioSolicitante.jsx
│   │   │   │   └── EstilosBeneficiarioReact.css
│   │   │   ├── PerfilVoluntario/
│   │   │   │   ├── perfilVoluntario.css
│   │   │   │   ├── PerfilVoluntario.jsx
│   │   │   │   ├── RegistroVoluntario.jsx
│   │   │   │   ├── VoluntarioDashboard.jsx
│   │   │   │   ├── voluntarioOportunidades.jsx
│   │   │   │   └── VoluntarioTareas.jsx
│   │   │   ├── Registro/
│   │   │   │   ├── RegistroBeneficiario.jsx
│   │   │   │   └── RegistrobeneReact.jsx
│   │   │   ├── Seguridad/
│   │   │   │   ├── TerminosYCondiciones.jsx
│   │   │   │   ├── PoliticasDePrivacidad.jsx
│   │   │   │   └── verificacionSMSbene.jsx
│   │   │   ├── Otros/
│   │   │   │   ├── login.jsx
│   │   │   │   ├── Layout.jsx
│   │   │   │   ├── ChatBot.jsx
│   │   │   │   └── PreguntasFrecuentes.jsx
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── routes.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── README.md
```

---

## ⚙️ Tecnologías Utilizadas

### 🔹 Backend

```json
{
  "bcrypt": "^6.0.0",
  "bcryptjs": "^3.0.2",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.15.2",
  "multer": "^2.0.1"
}
```

### 🔹 Frontend

```json
{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router": "^7.6.2",
  "react-router-dom": "^7.6.2",
  "axios": "^1.10.0",
  "leaflet": "^1.9.4",
  "react-leaflet": "^5.0.0",
  "react-chatbotify": "^2.1.0",
  "react-icons": "^5.5.0",
  "react-scroll": "^1.9.3"
}
```

---

## 🔐 Autenticación y Seguridad

- Autenticación con JWT
- Hash de contraseñas con bcrypt
- Middleware de rutas protegidas
- Control de acceso por tipo de usuario

---

## ✅ Funcionalidades Clave

- Registro y login de voluntarios y beneficiarios
- Formulario inteligente con región y comuna
- Panel de control personalizado para cada tipo de usuario
- Seguimiento de solicitudes y tareas
- ChatBot y navegación accesible

---

## 🛠 Instalación Local

```bash
# Backend
cd dignivida-backend
npm install
cp .env.example .env
npm run dev

# Frontend
cd ../dignivida-react
npm install
npm run dev
```

---

## 📝 Licencia

Proyecto de uso social, académico y comunitario. No se permite uso comercial sin autorización del equipo original.

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
