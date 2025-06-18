import { createContext, useState, useEffect } from "react";
import api from "../services/api";

// Crear contexto
export const AuthContext = createContext();

// Proveedor del contexto
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar usuario si hay token
  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");

    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Añadimos el rol al user si no viene desde el backend
        setUser({ ...res.data, rol });
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    token ? fetchUser() : setLoading(false);
  }, []);

  // Login (retorna el rol, pero no redirige)
  const login = async (email, password) => {
    try {
      console.log("👉 Enviando login con:", { email, password });

      const response = await api.post("/auth/login", { email, password });
      const { token, rol } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("rol", rol); // 👈 Guardamos el rol también

      const profile = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUser(profile.data); // ✅ rol viene incluido desde el backend

      console.log("🎯 Perfil cargado:", profile.data);

      return rol; // Devolvemos el rol al componente que hace login
    } catch (error) {
      console.error("❌ Error en login context:", error);
      throw new Error("Error en login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
