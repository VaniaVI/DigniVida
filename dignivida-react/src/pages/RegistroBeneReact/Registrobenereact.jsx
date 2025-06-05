import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useRegistro } from "../../hooks/useRegistro"

function Registrobenereact() {
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [edad, setEdad] = useState("")
  const [sexo, setSexo] = useState("")
  const [discapacidad, setDiscapacidad] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [region, setRegion] = useState("")
  const [comuna, setComuna] = useState("")
  const [terminos, setTerminos] = useState(false)
  const [comunasOptions, setComunasOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const { sendVerificationCode } = useRegistro()
  const navigate = useNavigate()

  const comunasPorRegion = {
    "arica-y-parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    tarapaca: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
    antofagasta: [
      "Antofagasta",
      "Mejillones",
      "Sierra Gorda",
      "Taltal",
      "Calama",
      "Ollagüe",
      "San Pedro de Atacama",
      "Tocopilla",
      "María Elena",
    ],
    atacama: [
      "Copiapó",
      "Caldera",
      "Tierra Amarilla",
      "Chañaral",
      "Diego de Almagro",
      "Vallenar",
      "Alto del Carmen",
      "Freirina",
      "Huasco",
    ],
    coquimbo: [
      "La Serena",
      "Coquimbo",
      "Andacollo",
      "La Higuera",
      "Paiguano",
      "Vicuña",
      "Illapel",
      "Canela",
      "Los Vilos",
      "Salamanca",
      "Ovalle",
      "Combarbalá",
      "Monte Patria",
      "Punitaqui",
      "Río Hurtado",
    ],
    valparaiso: [
      "Valparaíso",
      "Casablanca",
      "Concón",
      "Juan Fernández",
      "Puchuncaví",
      "Quintero",
      "Viña del Mar",
      "Isla de Pascua",
      "Los Andes",
      "Calle Larga",
      "Rinconada",
      "San Esteban",
      "La Ligua",
      "Cabildo",
      "Papudo",
      "Petorca",
      "Zapallar",
      "Quillota",
      "Calera",
      "Hijuelas",
      "La Cruz",
      "Nogales",
      "San Antonio",
      "Algarrobo",
      "Cartagena",
      "El Quisco",
      "El Tabo",
      "Santo Domingo",
      "San Felipe",
      "Catemu",
      "Llaillay",
      "Panquehue",
      "Putaendo",
      "Santa María",
      "Quilpué",
      "Limache",
      "Olmué",
      "Villa Alemana",
    ],
    ohiggins: [
      "Rancagua",
      "Codegua",
      "Coinco",
      "Coltauco",
      "Doñihue",
      "Graneros",
      "Las Cabras",
      "Machalí",
      "Malloa",
      "Mostazal",
      "Olivar",
      "Peumo",
      "Pichidegua",
      "Quinta de Tilcoco",
      "Rengo",
      "Requínoa",
      "San Vicente",
      "Pichilemu",
      "La Estrella",
      "Litueche",
      "Marchihue",
      "Navidad",
      "Paredones",
      "San Fernando",
      "Chépica",
      "Chimbarongo",
      "Lolol",
      "Nancagua",
      "Palmilla",
      "Peralillo",
      "Placilla",
      "Pumanque",
      "Santa Cruz",
    ],
    maule: [
      "Talca",
      "ConstiTución",
      "Curepto",
      "Empedrado",
      "Maule",
      "Pelarco",
      "Pencahue",
      "Río Claro",
      "San Clemente",
      "San Rafael",
      "Cauquenes",
      "Chanco",
      "Pelluhue",
      "Curicó",
      "Hualañé",
      "Licantén",
      "Molina",
      "Rauco",
      "Romeral",
      "Sagrada Familia",
      "Teno",
      "Vichuquén",
      "Linares",
      "Colbún",
      "Longaví",
      "Parral",
      "Retiro",
      "San Javier",
      "Villa Alegre",
      "Yerbas Buenas",
    ],
    nuble: [
      "Chillán",
      "Bulnes",
      "Cobquecura",
      "Coelemu",
      "Coihueco",
      "Chillán Viejo",
      "El Carmen",
      "Ninhue",
      "Ñiquén",
      "Pemuco",
      "Pinto",
      "Portezuelo",
      "Quillón",
      "Quirihue",
      "Ránquil",
      "San Carlos",
      "San Fabián",
      "San Ignacio",
      "San Nicolás",
      "Treguaco",
      "Yungay",
    ],
    biobio: [
      "Concepción",
      "Coronel",
      "Chiguayante",
      "Florida",
      "Hualqui",
      "Lota",
      "Penco",
      "San Pedro de la Paz",
      "Santa Juana",
      "Talcahuano",
      "Tomé",
      "Hualpén",
      "Lebu",
      "Arauco",
      "Cañete",
      "Contulmo",
      "Curanilahue",
      "Los Álamos",
      "Tirúa",
      "Los Ángeles",
      "Antuco",
      "Cabrero",
      "Laja",
      "Mulchén",
      "Nacimiento",
      "Negrete",
      "Quilaco",
      "Quilleco",
      "San Rosendo",
      "Santa Bárbara",
      "Tucapel",
      "Yumbel",
      "Alto Biobío",
    ],
    araucania: [
      "Temuco",
      "Carahue",
      "Cunco",
      "Curarrehue",
      "Freire",
      "Galvarino",
      "Gorbea",
      "Lautaro",
      "Loncoche",
      "Melipeuco",
      "Nueva Imperial",
      "Padre las Casas",
      "Perquenco",
      "Pitrufquén",
      "Pucón",
      "Saavedra",
      "Teodoro Schmidt",
      "Toltén",
      "Vilcún",
      "Villarrica",
      "Cholchol",
      "Angol",
      "Collipulli",
      "Curacautín",
      "Ercilla",
      "Lonquimay",
      "Los Sauces",
      "Lumaco",
      "Purén",
      "Renaico",
      "Traiguén",
      "Victoria",
    ],
    "los-rios": [
      "Valdivia",
      "Corral",
      "Lanco",
      "Los Lagos",
      "Máfil",
      "Mariquina",
      "Paillaco",
      "Panguipulli",
      "La Unión",
      "Futrono",
      "Lago Ranco",
      "Río Bueno",
    ],
    "los-lagos": [
      "Puerto Montt",
      "Calbuco",
      "Cochamó",
      "Fresia",
      "Frutillar",
      "Los Muermos",
      "Llanquihue",
      "Maullín",
      "Puerto Varas",
      "Castro",
      "Ancud",
      "Chonchi",
      "Curaco de Vélez",
      "Dalcahue",
      "Puqueldón",
      "Queilén",
      "Quellón",
      "Quemchi",
      "Quinchao",
      "Osorno",
      "Puerto Octay",
      "Purranque",
      "Puyehue",
      "Río Negro",
      "San Juan de la Costa",
      "San Pablo",
      "Chaitén",
      "Futaleufú",
      "Hualaihué",
      "Palena",
    ],
    aysen: [
      "Coyhaique",
      "Lago Verde",
      "Aysén",
      "Cisnes",
      "Guaitecas",
      "Cochrane",
      "O'Higgins",
      "Tortel",
      "Chile Chico",
      "Río Ibáñez",
    ],
    magallanes: [
      "Punta Arenas",
      "Laguna Blanca",
      "Río Verde",
      "San Gregorio",
      "Cabo de Hornos",
      "Antártica",
      "Porvenir",
      "Primavera",
      "Timaukel",
      "Natales",
      "Torres del Paine",
    ],
    metropolitana: [
      "Santiago",
      "Cerrillos",
      "Cerro Navia",
      "Conchalí",
      "El Bosque",
      "Estación Central",
      "Huechuraba",
      "Independencia",
      "La Cisterna",
      "La Florida",
      "La Granja",
      "La Pintana",
      "La Reina",
      "Las Condes",
      "Lo Barnechea",
      "Lo Espejo",
      "Lo Prado",
      "Macul",
      "Maipú",
      "Ñuñoa",
      "Pedro Aguirre Cerda",
      "Peñalolén",
      "Providencia",
      "Pudahuel",
      "Quilicura",
      "Quinta Normal",
      "Recoleta",
      "Renca",
      "San Joaquín",
      "San Miguel",
      "San Ramón",
      "Vitacura",
      "Puente Alto",
      "Pirque",
      "San José de Maipo",
      "Colina",
      "Lampa",
      "Tiltil",
      "San Bernardo",
      "Buin",
      "Calera de Tango",
      "Paine",
      "Melipilla",
      "Alhué",
      "Curacaví",
      "María Pinto",
      "San Pedro",
      "Talagante",
      "El Monte",
      "Isla de Maipo",
      "Padre Hurtado",
      "Peñaflor",
    ],
  }

  useEffect(() => {
    if (region && comunasPorRegion[region]) {
      setComunasOptions(comunasPorRegion[region])
      setComuna("") // Reset comuna when region changes
    } else {
      setComunasOptions([])
      setComuna("")
    }
  }, [region])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!terminos) {
      setError("Debes aceptar los términos y condiciones.")
      return
    }

    if (telefono.length !== 9 || !/^\d{9}$/.test(telefono)) {
      setError("El teléfono debe tener exactamente 9 dígitos numéricos.")
      return
    }

    if (Number(edad) < 60) {
      setError("Debes tener al menos 60 años.")
      return
    }

    if (!comuna) {
      setError("Por favor selecciona una comuna.")
      return
    }

    setLoading(true)

    try {
      const result = await sendVerificationCode(telefono)
      if (result.success) {
        // Guardar los datos del usuario en localStorage para usarlos después de la verificación
        const userData = {
          nombre,
          telefono,
          edad,
          sexo,
          discapacidad,
          descripcion,
          region,
          comuna,
        }
        localStorage.setItem("pendingUserData", JSON.stringify(userData))

        alert("Código de verificación enviado a tu teléfono.")
        navigate("/verificacionsms")
      } else {
        setError(result.error || "Hubo un error al enviar el código de verificación.")
      }
    } catch (error) {
      setError("Error inesperado. Por favor intenta de nuevo.")
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="Registrobenereact">
      {/* Contenedor invisible para reCAPTCHA */}
      <div id="recaptcha-container"></div>

      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <h2 className="auth-title">Registro de beneficiario</h2>
            <p className="auth-subtitle">Crea tu cuenta para solicitar acompañamiento</p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono (sin +56)</label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="9 XXXX XXXX"
                  required
                  value={telefono}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "")
                    setTelefono(val)
                  }}
                  maxLength={9}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  placeholder="Ingresa tu edad"
                  required
                  min={60}
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="sexo">Selecciona tu género</label>
                <select
                  id="sexo"
                  name="sexo"
                  required
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Selecciona</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="?">Prefiero no decirlo</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="discapacidad">¿Tienes alguna condición especial?</label>
                <select
                  id="discapacidad"
                  name="discapacidad"
                  required
                  value={discapacidad}
                  onChange={(e) => setDiscapacidad(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Selecciona</option>
                  <option value="Y">Sí</option>
                  <option value="N">No</option>
                </select>

                {discapacidad === "Y" && (
                  <div style={{ marginTop: "10px" }}>
                    <input
                      type="text"
                      id="descripcion"
                      name="descripcion"
                      placeholder="¿Cuál?"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      required={discapacidad === "Y"}
                      disabled={loading}
                    />
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="region">Región</label>
                <select
                  id="region"
                  name="region"
                  required
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  disabled={loading}
                >
                  <option value="">Selecciona tu región</option>
                  <option value="arica-y-parinacota">Arica y Parinacota</option>
                  <option value="tarapaca">Tarapacá</option>
                  <option value="antofagasta">Antofagasta</option>
                  <option value="atacama">Atacama</option>
                  <option value="coquimbo">Coquimbo</option>
                  <option value="valparaiso">Valparaíso</option>
                  <option value="ohiggins">Libertador Bernardo O'Higgins</option>
                  <option value="maule">Maule</option>
                  <option value="nuble">Ñuble</option>
                  <option value="biobio">Biobío</option>
                  <option value="araucania">La Araucanía</option>
                  <option value="los-rios">Los Ríos</option>
                  <option value="los-lagos">Los Lagos</option>
                  <option value="aysen">Aysén</option>
                  <option value="magallanes">Magallanes</option>
                  <option value="metropolitana">Metropolitana de Santiago</option>
                </select>
              </div>

              {region && (
                <div className="form-group">
                  <label htmlFor="comuna">Comuna</label>
                  <select
                    id="comuna"
                    name="comuna"
                    required
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                    disabled={loading}
                  >
                    <option value="">Selecciona tu comuna</option>
                    {comunasOptions.map((comunaOption) => (
                      <option key={comunaOption} value={comunaOption}>
                        {comunaOption}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-group form-checkbox">
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  required
                  checked={terminos}
                  onChange={(e) => setTerminos(e.target.checked)}
                  disabled={loading}
                />
                <label htmlFor="terminos">
                  Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de Privacidad</a>
                </label>
              </div>

              {error && (
                <div className="error-message" style={{ color: "red", marginBottom: "1rem" }}>
                  {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? "Enviando código..." : "Registrarme"}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registrobenereact
