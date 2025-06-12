document.getElementById('documento').addEventListener('change', function(e) {
    var fileName = e.target.files[0] ? e.target.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('file-name').textContent = fileName;
});


const comunasPorRegion = {
    "arica-y-parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "tarapaca": ["Alto Hospicio", "Iquique", "Camiña", "Colchane", "Huara", "Pica", "Pozo Almonte"],
    "antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "atacama": ["Chañaral", "Diego de Almagro", "Caldera", "Copiapó", "Tierra Amarilla", "Alto del Carmen", "Freirina", "Huasco", "Vallenar"],
    "coquimbo": ["Canela", "Illapel", "Los Vilos", "Salamanca", "Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña", "Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Río Hurtado"],
    "valparaiso": ["Isla de Pascua", "Calle Larga", "Los Andes", "Rinconada", "San Esteban", "Limache", "Olmué", "Quilpué", "Villa Alemana", "Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar", "Hijuelas", "La Calera", "La Cruz", "Nogales", "Quillota", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo", "Catemu", "Llaillay", "Panquehue", "Putaendo", "San Felipe", "Santa María", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar"],
    "ohiggins": ["Rancagua", "Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Requínoa", "Rengo", "San Francisco de Mostazal", "San Vicente", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "Pichilemu", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "San Fernando", "Santa Cruz"],
    "maule": ["Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca"],
    "nuble": ["Bulnes", "Chillán", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
    "biobio": ["Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Alto Biobío", "Antuco", "Cabrero", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Chiguayante", "Concepción", "Coronel", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé"],
    "araucania": ["Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "los-rios": ["Futrono", "La Unión", "Lago Ranco", "Río Bueno", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Valdivia"],
    "los-lagos": ["Ancud", "Castro", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Montt", "Puerto Varas", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Pablo", "San Juan de la Costa", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "aysen": ["Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Coyhaique", "Lago Verde", "Chile Chico", "Río Ibáñez"],
    "magallanes": ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Punta Arenas", "Río Verde", "San Gregorio", "Porvenir", "Primavera", "Timaukel", "Puerto Natales", "Natales", "Torres del Paine"],
    "metropolitana": ["Colina", "Lampa", "Tiltil", "Pirque", "Puente Alto", "San José de Maipo", "Buin", "Calera de Tango", "Paine", "San Bernardo", "Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Granja", "La Florida", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Miguel", "San Joaquín", "San Ramón", "Santiago", "Vitacura", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor", "Talagante"]
};

function cargarComunas() {
    const region = document.getElementById("region").value;
    const comunaSelect = document.getElementById("comuna");
    const comunaContainer = document.getElementById("comuna-container");

    comunaSelect.innerHTML = '<option value="">Selecciona tu comuna</option>';

    if (region && comunasPorRegion[region]) {
        comunasPorRegion[region].forEach(comuna => {
            const option = document.createElement("option");
            option.value = comuna.toLowerCase().replace(/\s/g, '-');
            option.textContent = comuna;
            comunaSelect.appendChild(option);
        });
        comunaContainer.style.display = "block";
    } else {
        comunaContainer.style.display = "none";
    }
}
