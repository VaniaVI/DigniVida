import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";

export function useModalRegistro() {
  const [isOpen, setIsOpen] = useState(false);
  const modalOverlayRef = useRef(null);
  const location = useLocation();

  const openModal = (e) => {
    if (e) e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Detectar clic fuera del contenido del modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalOverlayRef.current &&
        event.target === modalOverlayRef.current
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

    // 🔥 Cierra el modal si cambia la ruta
  useEffect(() => {
    closeModal();
  }, [location]);

  return {
    isOpen,
    openModal,
    closeModal,
    modalOverlayRef,
  };
}
