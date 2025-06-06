import { useState, useEffect, useRef } from 'react';

export function useModalRegistro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVolunteerPreselected, setIsVolunteerPreselected] = useState(false);
  const modalRef = useRef(null);

  const openModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    setIsVolunteerPreselected(false);
  };

  const openModalWithVolunteer = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
    setIsVolunteerPreselected(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVolunteerPreselected(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && event.target === modalRef.current) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isModalOpen]);

  const getCardStyles = (isVolunteerCard) => {
    if (isVolunteerPreselected && isVolunteerCard) {
      return {
        borderColor: 'var(--primary-color)',
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px var(--shadow-color)',
        transition: 'all 0.3s ease',
      };
    }
    return {
      borderColor: 'transparent',
      transform: 'none',
      boxShadow: 'none',
      transition: 'all 0.3s ease',
    };
  };

  return {
    isModalOpen,
    isVolunteerPreselected,
    modalRef,
    openModal,
    openModalWithVolunteer,
    closeModal,
    getCardStyles,
  };
}
