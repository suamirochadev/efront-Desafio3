document.addEventListener("DOMContentLoaded", function () {
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
    link.addEventListener("click", function() {
      modal.style.display = "block";
      imgAleatoria();
    });
  });

  // Function para procurar uma 
  // imagem aqui: https://source.unsplash.com/random/?gift 
  // antes de abrir o modal. Ai, depois passar o link gerado 
  // pra dentro do src.
  function getRandomImage(callback) {
    // URL para obter uma imagem aleatória da categoria "gift" do Unsplash
    const apiUrl = 'https://source.unsplash.com/random/?gift';
        // Requisição para obter a URL da imagem aleatória
        fetch(apiUrl)
        .then(response => response.url)
        .then(url => callback(url))
        .catch(error => console.error('Erro ao obter imagem aleatória:', error));
}

  function imgAleatoria() {
    // Obter a imagem aleatória
    getRandomImage((imageUrl) => {
      // Atribuir a URL da imagem ao atributo src da imagem no modal
      document.getElementById('random-photo').src = imageUrl;
    });
  }

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
  }
}
)