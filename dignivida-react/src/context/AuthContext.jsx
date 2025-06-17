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

    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    token ? fetchUser() : setLoading(false);
  }, []);

  // Login (sin navigate)
const login = async (email, password) => {
  try {
    console.log("👉 Enviando login con:", { email, password });

    const response = await api.post("/auth/login", { email, password });
    console.log("✅ Respuesta del backend:", response);

    const { token } = response.data;
    localStorage.setItem("token", token);

    const profile = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setUser(profile.data);
    console.log("🎯 Perfil cargado:", profile.data);

    // (opcional: redireccionar aquí si no lo haces en otro lado)
  } catch (error) {
    console.error("❌ Error en login context:", error);
    throw new Error("Error en login");
  }
};

  // Logout (sin navigate)
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
