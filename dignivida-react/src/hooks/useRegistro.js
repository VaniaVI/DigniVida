
import { useRef } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../firebase/config"

export function useRegistro() {
  const recaptchaVerifier = useRef(null)

  const sendVerificationCode = async (phoneNumber) => {
    // Formatear el número de teléfono con código de país de Chile
    const formattedPhone = `+56${phoneNumber}`

    if (!recaptchaVerifier.current) {
      recaptchaVerifier.current = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA resuelto:", response)
        },
        "expired-callback": () => {
          console.log("reCAPTCHA expirado")
        },
      })
    }

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier.current)
      window.confirmationResult = confirmationResult
      return { success: true, confirmationResult }
    } catch (error) {
      console.error("Error al enviar el código de verificación:", error)
      return { success: false, error: error.message }
    }
  }

  const verifyCode = async (code) => {
    try {
      if (window.confirmationResult) {
        const result = await window.confirmationResult.confirm(code)
        return { success: true, user: result.user }
      }
      return { success: false, error: "No hay código de confirmación disponible" }
    } catch (error) {
      console.error("Error al verificar el código:", error)
      return { success: false, error: error.message }
    }
  }

  return { sendVerificationCode, verifyCode }
}
