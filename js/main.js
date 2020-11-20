'use strict';

// const modal = document.getElementById("myModal");
const modal = document.querySelector('.modal');

// const btn = document.getElementById("myBtn");
const btn = document.querySelector('.button')

// const span = document.getElementsByClassName("modal__close")[0];
const span = document.querySelector('.modal__close');
const redBtn = document.querySelector('.button--red');

// btn.onclick = () => {modal.style.display = "flex"; modal.classList.remove('modal--hide');};
(function popUp() {
  btn.addEventListener('click', () => {
    modal.classList.remove('modal--hide');
    modal.classList.add('modal--up');
  })
})();

// span.onclick = () => {modal.style.display = "none"; modal.classList.add('modal--hide');}
(function modalClose() {
  closeWithX();
  closeWithBtn();
  eventOutsideModal();
}
)();

function closeWithX() {
  span.addEventListener('click', () => {
    modal.classList.remove('modal--up');
    modal.classList.add('modal--hide');
  });
}

function closeWithBtn() {
  redBtn.addEventListener('click', () => {
    modal.classList.add('modal--hide');
    modal.classList.remove('modal--up');
  });
}

/* window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.add('modal--hide');
  }
} */
function eventOutsideModal() {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('modal--hide');
      modal.classList.remove('modal--up');
    }
  })
}