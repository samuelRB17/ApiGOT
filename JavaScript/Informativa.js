function Informativa() {
  const root = document.getElementById("root");
  root.innerHTML = ""; // Limpia el contenido anterior

  // Contenedor principal
  const contenedor = document.createElement("div");
  contenedor.style.display = "flex";
  contenedor.style.flexDirection = "column";
  contenedor.style.alignItems = "center";
  contenedor.style.justifyContent = "center";
  contenedor.style.padding = "40px";
  contenedor.style.color = "white";
  contenedor.style.textAlign = "center";
  contenedor.style.background = "linear-gradient(to bottom, #0a0a0a, #1a1a1a)";
  contenedor.style.borderRadius = "20px";
  contenedor.style.boxShadow = "0 0 15px rgba(255,255,255,0.1)";
  contenedor.style.minHeight = "80vh";

  // Título principal
  const titulo = document.createElement("h1");
  titulo.textContent = "APIGOT – Explora el mundo de Game of Thrones";
  titulo.style.fontSize = "2rem";
  titulo.style.marginBottom = "20px";
  titulo.style.color = "#ffd700";

  // Descripción
  const descripcion = document.createElement("p");
  descripcion.textContent =
    "Descubre los personajes,misterios, culturas y geografías de los cuatro continentes del mundo de Game of Thrones: Westeros, Essos, Sothoryos y Ulthos. Esta aplicación te permitirá explorar cada región con imágenes y detalles fascinantes basados en la saga de George R. R. Martin.";
  descripcion.style.maxWidth = "800px";
  descripcion.style.lineHeight = "1.5";
  descripcion.style.marginBottom = "30px";

  // Imagen principal (póster)
  const imagen = document.createElement("img");
  imagen.src = "https://stickerrs.com/wp-content/uploads/2024/03/Game-of-Thrones-Reactions-Stickers.png";
  imagen.alt = "Mapa de los continentes de Game of Thrones";
  imagen.style.width = "50%";
  imagen.style.borderRadius = "15px";
  imagen.style.boxShadow = "0 0 15px rgba(191, 194, 12, 0.3)";
  imagen.style.marginBottom = "25px";

  // Lema o frase promocional
  const lema = document.createElement("h2");
  lema.textContent = "“El mapa no es solo territorio, es historia, poder y destino.”";
  lema.style.fontStyle = "italic";
  lema.style.color = "#ccc";

  // Añadir todo al contenedor
  contenedor.appendChild(titulo);
  contenedor.appendChild(descripcion);
  contenedor.appendChild(imagen);
  contenedor.appendChild(lema);

  // Renderizar en el root
  root.appendChild(contenedor);
}
