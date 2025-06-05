
import { useState, useRef } from "react"
import { useRegistro } from "../hooks/useRegistro"

export const useVerificacionSMS = () => {
  const [codigo, setCodigo] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const inputsRef = useRef([])
  const { verifyCode } = useRegistro()

  const handleInputChange = (value, index) => {
    if (!/^\d?$/.test(value)) return

    const nuevoCodigo = [...codigo]
    nuevoCodigo[index] = value
    setCodigo(nuevoCodigo)

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !codigo[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const verificarCodigo = async (e) => {
    e.preventDefault()
    const codigoFinal = codigo.join("")

    if (codigoFinal.length !== 6) {
      setError("Por favor ingresa el código completo de 6 dígitos")
      return
    }

    setLoading(true)
    setError("")

    const result = await verifyCode(codigoFinal)

    if (result.success) {
      setSuccess(true)
      // Aquí puedes redirigir o hacer lo que necesites después de la verificación exitosa
      console.log("Usuario verificado:", result.user)
    } else {
      setError(result.error || "Código inválido. Intenta de nuevo.")
    }

    setLoading(false)
  }

  return {
    codigo,
    loading,
    error,
    success,
    handleInputChange,
    handleKeyDown,
    verificarCodigo,
    inputsRef,
  }
}
