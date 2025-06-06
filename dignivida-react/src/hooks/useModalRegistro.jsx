"use client"

import { useState, useEffect, useRef } from "react"

export function useModalRegistro() {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  // Abrir modal
  const openModal = (e) => {
    if (e) e.preventDefault()
    setIsOpen(true)
  }

  // Cerrar modal
  const closeModal = () => {
    setIsOpen(false)
  }

  // Cerrar modal al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && event.target === modalRef.current) {
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return {
    isOpen,
    openModal,
    closeModal,
    modalRef,
  }
}
