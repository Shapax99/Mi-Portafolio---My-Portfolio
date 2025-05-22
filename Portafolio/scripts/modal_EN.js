const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');

//Cargar imagenes para los modales de cada proyecto, divididos por numero de grupo 
const imageGroups = {
  0: ['img/1.png', 'img/2.png'],
  1: ['img/proyecto2-1.jpg', 'img/proyecto2-2.jpg']
};

//Titulo y descripcion de cada modal de proyecto correspondinte por grupos
const projectDetails = {
  0: {
    title: 'Echo UI in Python for adding or subtracting matrices',
    desc: 'Small interface made in Python to add and subtract matrices from 1x1 to 5x5'
  },
  1: {
    title: 'Soon...',
    desc: 'Soon...'
  }
};

let currentImages = [];
let currentIndex = 0;

function abrirModal(index) {
  const data = projectDetails[index];
  currentImages = imageGroups[index];
  currentIndex = 0;

  modalTitulo.textContent = data.title;
  modalDesc.textContent = data.desc;
  modalImg.src = currentImages[currentIndex];

  modal.classList.remove('hidden');
}

function cerrarModal() {
  modal.classList.add('hidden');
}

document.querySelectorAll('.btn.ver-proyecto').forEach((btn, index) => {
  btn.addEventListener('click', () => abrirModal(index));
});