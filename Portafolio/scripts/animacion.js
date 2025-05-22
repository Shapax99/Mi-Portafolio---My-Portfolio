document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add('loaded'); // animación inicial
});


// Contacto animación
document.querySelector('.btn[href=\"#contacto\"]').addEventListener('click', (e) => {
  console.log("Hola")
  e.target.classList.add('animate-fade');
  setTimeout(() => e.target.classList.remove('animate-fade'), 500);
});


// Animacion para vista de ".proyect"
const elemento = document.querySelectorAll(".project");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aparicion");
    } else {
      entry.target.classList.remove("aparicion");
    }
  });
}, {
  threshold: 1 // Para cuando el elemento este 100% visible
})
  elemento.forEach(el => observer.observe(el));


 // Animacion para vista de ".about"
const elemento2 = document.querySelector(".about");

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elemento2.classList.add("aparicion");
    } else {
      elemento2.classList.remove("aparicion");
    }
  });
}, {
  threshold: 1 // Para cuando el elemento este 100% visible
})
 observer2.observe(elemento2);
