function GenerarLista(arraypersonajes) {
  let listaHTML = "";
  for (let i = 0; i < arraypersonajes.length; i++) {
    listaHTML += `
      <div class="c-lista-personaje" onclick="Detalle('${arraypersonajes[i].id}')">
        <p>#${arraypersonajes[i].id}</p>
        <img src="${arraypersonajes[i].imageUrl}" width="auto" height="100" loading="lazy" alt="${arraypersonajes[i].fullName}">
        <p>${arraypersonajes[i].fullName}</p>
        <p class="familia">${arraypersonajes[i].family}</p>
      </div>`;
  }
  return listaHTML;
}

function buscadorfuncion(texto) {
  if (texto.length >= 2) {
    const filtrados = personajes.filter(p =>
      p.fullName.toLowerCase().includes(texto.toLowerCase())
    );
    let listaHTML = GenerarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    let listaHTML = GenerarLista(personajes);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}





function Home() {
  var root = document.getElementById("root");
  root.innerHTML = "";

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar personaje...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Filtro de GrandesCasas
  const GrandesCasas = [
     "House Stark",
  "House Lannister",
  "House Targaryen",
  "House Baratheon",
  "House Greyjoy",
  "House Bolton",
  "House Tyrell",
  "Otros"
];
  const filtro = document.createElement("div");
  for (let i = 0; i < GrandesCasas.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = GrandesCasas[i];
    btn.addEventListener("click", () => {
      FiltroConexion(GrandesCasas[i]);
    });
    filtro.appendChild(btn);
  }

  // Lista inicial
  const listaHTML = GenerarLista(personajes);
  const contenedorLista = document.createElement("div");
  contenedorLista.classList.add("c-lista");
  contenedorLista.innerHTML = listaHTML;
  contenedorLista.id = "la-lista";

  // Añadir al root
  root.appendChild(buscador);
  root.appendChild(filtro);
  root.appendChild(contenedorLista);
}

   


   
