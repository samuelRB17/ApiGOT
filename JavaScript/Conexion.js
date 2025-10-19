let personajes = [];
let totalPersonajes = 0;

//  Lista de las grandes casas
const casasPrincipales = [
  "House Stark",
  "House Lannister",
  "House Targaryen",
  "House Baratheon",
  "House Greyjoy",
  "House Bolton",
  "House Tyrell",
  "Otros"
];

//  Función para limpiar y normalizar texto
function normalizar(texto) {
  if (!texto) return "";
  return texto.toLowerCase().trim();
}

//  Conexión a la API de Game of Thrones
async function conexion(UnFiltro = "All") {
  const res = await fetch("https://thronesapi.com/api/v2/Characters");
  const data = await res.json();
  totalPersonajes = data.length;

  // 🔧 Correcciones manuales de nombres mal escritos
  const correcciones = {
    "house lanister": "house lannister",
    "house Targaryan": "house targaryen",
    
  };

  // Aplicar correcciones de nombre de casa
  data.forEach(p => {
    let familia = normalizar(p.family);
    if (correcciones[familia]) {
      p.family = correcciones[familia];
    }
  });

  // Si no hay filtro, devuelve todo
  if (UnFiltro === "All") {
    return data;
  }

  const filtroNormalizado = normalizar(UnFiltro);

  // 🟢 Si se selecciona "Otros", mostrar personajes que no pertenecen a las grandes casas
  if (filtroNormalizado === "otros") {
    const filtrados = data.filter(personaje => {
      const familiaRaw = personaje.family || "";
      const familia = normalizar(familiaRaw);

      if (!familia) return true;

      // Si su familia no pertenece a ninguna casa principal
      return !casasPrincipales.some(casa =>
        normalizar(casa).includes(familia) || familia.includes(normalizar(casa))
      );
    });
    return filtrados;
  }

  // 🔍 Filtrar personajes que pertenecen a la casa seleccionada
  const filtrados = data.filter(personaje => {
    const familia = normalizar(personaje.family);
    const lastName = normalizar(personaje.lastName);
    const full = normalizar(personaje.fullName);

    // Coincidencia flexible
    if (familia && (familia.includes(filtroNormalizado) || filtroNormalizado.includes(familia))) return true;
    if (lastName && lastName.includes(filtroNormalizado)) return true;
    if (full && full.includes(filtroNormalizado)) return true;

    return false;
  });

  return filtrados;
}

// 🧩 Función para cargar todos los personajes al iniciar
async function General() {
  if (personajes.length === 0) {
    personajes = await conexion("All");
  }
  Home(personajes);
}

// Función para aplicar filtros cuando se hace clic en un botón
async function FiltroConexion(filtroElegido) {
  let filtrados = await conexion(filtroElegido);
  document.getElementById("root").innerHTML = "";
  let listaFiltro = GenerarLista(filtrados);
  document.getElementById("root").innerHTML = listaFiltro;
}

General();

console.log("conexion.js cargado correctamente ");
