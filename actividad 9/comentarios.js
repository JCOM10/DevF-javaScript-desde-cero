document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentSection = document.getElementById('commentsSection');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        // Obtener la fecha y hora actual
        const now = new Date();
        const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

        // Crear el contenido del comentario
        newComment.innerHTML = `
            <p>${commentText}</p>
            <p class="timestamp">${timestamp}</p>
            <button class="deleteBtn">Eliminar</button>
        `;

        // Agregar el comentario al contenedor
        commentSection.appendChild(newComment);

        // Limpiar el campo de texto
        commentInput.value = '';

        // Agregar funcionalidad al botón de eliminar
        newComment.querySelector('.deleteBtn').addEventListener('click', function() {
            newComment.remove();
        });
    }
});
