function agregarComentario() {
    const input = document.getElementById("comentarioInput");
    const texto = input.value.trim();
    if (texto === "") return;

    const comentariosDiv = document.getElementById("comentarios");
    const nuevoComentario = document.createElement("div");
    nuevoComentario.classList.add("comentario");
    
    const fecha = new Date().toLocaleString();
    nuevoComentario.innerHTML = `<p>${texto}</p><span class="fecha">${fecha}</span> <button onclick="eliminarComentario(this)">Eliminar</button>`;
    
    comentariosDiv.appendChild(nuevoComentario);
    input.value = ""; // Limpiar el input
}

function eliminarComentario(boton) {
    boton.parentElement.remove();
}
