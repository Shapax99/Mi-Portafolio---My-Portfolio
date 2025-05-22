// Actualizar año automáticamente
document.getElementById('year').textContent = new Date().getFullYear();

// Manejo del formulario (demo)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado. Gracias por contactarme.');
    this.reset();
});


// Boton de redireccionar
document.querySelector("#language-toggle").addEventListener("click", () => {
    window.location.href = "index_ES.html"
});