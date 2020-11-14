'use strict';

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("modal__close")[0];

btn.onclick = () => {modal.style.display = "flex"; modal.classList.remove('modal--hide');};

span.onclick = () => {modal.style.display = "none"; modal.classList.add('modal--hide');}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modal.classList.add('modal--hide');
  }
}
