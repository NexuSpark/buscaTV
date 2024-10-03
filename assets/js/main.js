const optionSelect = document.getElementById("options");
const searchInput = document.getElementById("search");
const submitButton = document.getElementById("submit");
let jsonSeleccionado;

optionSelect.addEventListener("change", () => {
    if (optionSelect.value == "peliculas") {
        search.placeholder = "Busca tu película favorita";
        jsonSeleccionado = "assets/json/peliculas.json";
    } else {
        search.placeholder = "Busca tu serie favorita";
        jsonSeleccionado = "assets/json/series.json";
    }
})

/** Perdí 1 hora intentando ver porque me deja ingresar signos
    si en el código ascii lo único que hay entre 65 y 90 son letras
    por lo menos encontre que para el espacio había que poner " " y no 32
    asique efe por los signos, tampoco importa 
    y tampoco se porque deja borrar si no lo puse en la condición
    aunque eso último es el comportamiento esperado (se supone que es 8) */
    
searchInput.addEventListener("keydown", (event) => {
    if (event.key != " ") {
        if (event.key < 65 || event.key > 90) {
            event.preventDefault();
        }
    }
})