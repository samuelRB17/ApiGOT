var esFavorito = false;

// Agregar o quitar un personaje de favoritos
function toggleFavorito(paramid, paramname, paramimg, paramfamily) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let existe = favoritos.some(p => p.id === paramid);

  if (existe) {
    // Quitar de favoritos
    favoritos = favoritos.filter(p => p.id !== paramid);
    esFavorito = false;
  } else {
    // Agregar nuevo favorito
    favoritos.push({
      id: paramid,
      fullName: paramname,
      imageUrl: paramimg,
      family: paramfamily
    });
    esFavorito = true;
  }

  // Guardar
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  // Actualizar icono
  const boton = document.querySelector(`#corazon-${paramid}`);
  if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}


// Mostrar detalle del personaje
async function Detalle(id) {
  var root = document.getElementById("root");
  const res = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
  const data = await res.json();

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  esFavorito = favoritos.some(p => p.id === data.id);

  const detalle = `
    <section class="c-detalle">
      <img src="${data.imageUrl}" alt="${data.fullName}" height="180" />
      <p><b>${data.fullName}</b></p>
      <p>Título: ${data.title || "Sin título"}</p>
      <p>Casa: ${data.family || "Desconocida"}</p>
      <button onClick="toggleFavorito(${data.id}, '${data.fullName}', '${data.imageUrl}', '${data.family || "Desconocida"}')">
        <span id="corazon-${data.id}">${esFavorito ? "❤️" : "🤍"}</span> Favorito
      </button>
    </section>
  `;
  root.innerHTML = detalle;
}
