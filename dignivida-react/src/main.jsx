import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import AuthProvider from './context/AuthContext' // 👈 Asegúrate de importar el AuthProvider

import 'leaflet/dist/leaflet.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* 👈 Envuelve acá */}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
