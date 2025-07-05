const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');

//Load images for each project modal, divided by group number
const imageGroups = {
  0: ['img/1.png', 'img/2.png'],
  1: ['img/3.png', 'img/4.png', 'img/5.png', 'img/6.png'],
  2: ['']
};

//Title and description of each corresponding project modal by groups
const projectDetails = {
  0: {
    title: 'User Interface made in Python for adding or subtracting matrices',
    desc: 'Small interface made in Python to add and subtract matrices from 1x1 to 5x5'
  },
  1: {
    title: 'SIA (Academic Integral System)',
    desc: 'Web system for a High School to manage students\' academic records, backgrounds, justifications and messages with role-based access and secure authentication.'
  },
  2: {
    title: 'Future project...',
    desc: 'Future project...'
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