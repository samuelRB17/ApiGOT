// Continentes.js
async function cargarContinentes() {
  const root = document.getElementById("root");
  if (!root) {
    console.error("No existe #root en el HTML");
    return;
  }

  root.innerHTML = "<h2>Cargando continentes…</h2>";

  try {
    const res = await fetch("https://thronesapi.com/api/v2/Continents");
    const data = await res.json();

    const imagenesPorNombre = {
      "Westeros": "https://m.media-amazon.com/images/I/81RciW3G1QL._AC_SL1500_.jpg",
      "Essos": "https://i.pinimg.com/736x/fe/48/cb/fe48cb5375061967e45abedd1c653483.jpg",
      "Sothoryos": "https://i.pinimg.com/736x/02/9f/b5/029fb524abd1db2e0e15737a152a8742.jpg",
      "Ulthos": "https://preview.redd.it/the-existence-of-ulthos-deeply-annoys-me-v0-9f2h7qdmw5cd1.jpeg?auto=webp&s=d374c45a4151a6c9eec0ec9f60c8cc6701f45388"
    };

    const placeholder = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    root.innerHTML = ""; // limpiar

    const grid = document.createElement("div");
    grid.className = "grid-continentes";

    data.forEach((c) => {
      const src = imagenesPorNombre[c.name] || placeholder;

      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta c-continent-card";

      tarjeta.innerHTML = `
        <img src="${src}" alt="${c.name}" loading="lazy"
          onerror="this.onerror=null; this.src='${placeholder}';">
        <h3 class="c-nombre">${c.name}</h3>
        <p class="c-desc">${DescripcionContinente(c.name)}</p>
      `;
      grid.appendChild(tarjeta);
    });

    root.appendChild(grid);
  } catch (err) {
    console.error("Error cargarContinentes:", err);
    root.innerHTML = "<p>Error al cargar continentes.</p>";
  }
}

function DescripcionContinente(nombre) {
  switch ((nombre || "").toLowerCase()) {
    case "westeros":
      return "Westeros: hogar de los Siete Reinos y el Muro.";
    case "essos":
      return "Essos: vasto continente oriental, ciudades libres y Valyria.";
    case "sothoryos":
      return "Sothoryos: región selvática y poco conocida al sur.";
    case "ulthos":
      return "Ulthos: continente legendario, poco explorado.";
    default:
      return "Región del mundo de Game of Thrones.";
  }
}
