// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// var btn = document.getElementsByClassName("card")[1];
// btn.onclick = function () {
//   console.log('teste')
// };

// Select all <a> elements with class "card"
const cardLinks = document.querySelectorAll("a.card");

cardLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.modal.style.display = "block";
  });
});

// Function para procurar uma imagem aqui: https://source.unsplash.com/random/?gift antes de abrir o modal. Ai, depois passar o link gerado pra dentro do src.

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};