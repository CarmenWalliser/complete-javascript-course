'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const openModal = function () {
  //console.log('Button clicked');
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
  //   btnShowModal[i].addEventListener('click', function () {
  //     console.log('Button clicked');
  //     model.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModal();
  }
  // model.classList.add('hidden');
  // overlay.classList.add('hidden');
});
