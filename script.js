const items = document.querySelectorAll(".item");
const dropzones = document.querySelectorAll(".dropzone");

// items
items.forEach((item) => {
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
});

const log = (message) => console.log(">", message);

function dragstart() {
  dropzones.forEach((dropzone) => {
    dropzone.classList.add("highlight");
  });

  this.classList.add("is-dragging");
}

function dragend() {
  dropzones.forEach((dropzone) => {
    dropzone.classList.remove("highlight");
  });

  this.classList.remove("is-dragging");
}

// dropzones
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drag", drop);
});

function dragenter() {}
function dragover() {
  this.classList.add("over");

  const cardBeingDragged = document.querySelector(".is-dragging");

  this.appendChild(cardBeingDragged);
}
function dragleave() {
  this.classList.remove("over");
}
function drop() {
  this.classList.remove("over");
}
