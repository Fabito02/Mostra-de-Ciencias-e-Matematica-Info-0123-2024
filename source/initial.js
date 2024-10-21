//Função para as imagens passarem regurlarmente no slider
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  proximaImagem();
}, 6000);

function proximaImagem() {
  count++;
  if (count > 3) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
//Fim da função do slider
