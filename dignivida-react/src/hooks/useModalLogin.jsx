import { useState, useRef } from 'react';

export const useModalLogin = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginModalRef = useRef(null);

  // Abre el modal de login
  const openLoginModal = () => setIsLoginOpen(true);
  
  // Cierra el modal de login
  const closeLoginModal = () => setIsLoginOpen(false);

  return { 
    isLoginOpen, 
    openLoginModal, 
    closeLoginModal, 
    loginModalRef 
  };
};