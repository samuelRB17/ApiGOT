function Favoritos() {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  if (favoritos.length == 0) {
    document.getElementById("root").innerHTML = "No hay personajes favoritos";
  } else {
    document.getElementById("root").innerHTML = GenerarLista(favoritos);
  }
}