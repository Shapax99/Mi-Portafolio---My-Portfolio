const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');

//Cargar imagenes para los modales de cada proyecto, divididos por numero de grupo 
const imageGroups = {
  0: ['img/1.png', 'img/2.png'],
  1: ['img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'],
  2: ['']
};

//Titulo y descripcion de cada modal de proyecto correspondinte por grupos
const projectDetails = {
  0: {
    title: 'Interfaz de Usuario echo en Python para sumar o restar matrices',
    desc: 'Pequeña interfaz echa en Python para sumar y restar matrices de 1x1 hasta 5x5'
  },
  1: {
    title: 'SIA (Sistema Integral Academico)',
    desc: 'Hola'
  },
  2: {
    title: 'Proyecto futuro...',
    desc: 'Proyecto futuro...'
  },
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