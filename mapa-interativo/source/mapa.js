//Script para o zoom no mapa usando a API Panzoom
const mapa1 = document.getElementById("map1");
const panzoom1 = Panzoom(mapa1, {
  maxScale: 15,
  zoomWithWheel: true,
  pinchToZoom: true,
});

const mapa2 = document.getElementById("map2");
const panzoom2 = Panzoom(mapa2, {
  maxScale: 15,
  zoomWithWheel: true,
  pinchToZoom: true,
});

panzoom1.zoom(0.5, { animate: true });
panzoom2.zoom(0.5, { animate: true });

// controles de zoom com rotação do mouse
mapa1.addEventListener("wheel", (event) => {
  event.preventDefault();
  panzoom1.zoomWithWheel(event);
});

mapa2.addEventListener("wheel", (event) => {
  event.preventDefault();
  panzoom2.zoomWithWheel(event);
});

// Funções de zoom com os botões de zoom
function zoomIn() {
  panzoom1.zoomIn(0.3, { animate: true });
  panzoom2.zoomIn(0.3, { animate: true });
}

function zoomOut() {
  panzoom1.zoomOut(0.3, { animate: true });
  panzoom2.zoomOut(0.3, { animate: true });
}

// Script responsável por abrir os tópicos e sumário
function openTopic(topico) {
  if (topico.parentElement.classList.contains("active") === true) {
    topico.parentElement.classList.remove("active");
  } else {
    let allTopics = document.querySelectorAll(".topico .sumario");
    allTopics.forEach(function (elemento) {
      elemento.classList.remove("active");
    });

    topico.parentElement.classList.add("active");
  }

  document.addEventListener("click", function fecharClickFora(event) {
    if (!topico.parentElement.contains(event.target)) {
      topico.parentElement.classList.remove("active");
      document.removeEventListener("click", fecharClickFora);
    }
  });
}

// Função para fechar elemento flutuante
function fecharCaixasFlutuantes(e) {
  e.classList.add("hide");
  document.querySelectorAll("#caixaFlutuante").forEach((caixa) => {
    caixa.classList.add("hide");
  });
}

const modal = document.getElementById("modalExpandir");
//funcão para expandir os dados do tópico e funcão para fechar modal
function expandirTopico(topico) {
  const elemento = topico.parentElement;
  const texto = elemento.querySelector(".conteudoTopico").innerHTML;

  modal.querySelector(".text").innerHTML = texto;
  modal.querySelector("#title").innerHTML =
    elemento.querySelector(".titleTopico").innerHTML;

  modal.style.display = "flex";
}

function fecharModal(e) {
  e.parentElement.parentElement.style.display = "none";
}

function fecharBarraLateral() {
  document.querySelector(".barraLateral").classList.add("barraLateralFechada");
}

function abrirBarraLateral() {
  document
    .querySelector(".barraLateral")
    .classList.remove("barraLateralFechada");
}

window.onclick = function (event) {
  if (
    event.target == document.getElementById("map") &&
    !event.target == document.getElementById("svg-map")
  ) {
    fecharBarraLateral();
  }
};

function toggleMapa() {
  let pill = document.querySelector(".pillSwitcher");
  let map1 = document.querySelector("#map1");
  let map2 = document.querySelector("#map2");

  if (!pill.classList.contains("active")) {
    pill.innerHTML = '<i class="fa-solid fa-map-location-dot"></i>';
    map1.style.display = "none";
    map2.style.display = "block";
    panzoom2.reset();
    panzoom1.zoom(0.5);
    panzoom2.zoom(0.5);
  } else {
    pill.innerHTML = '<i class="fa-solid fa-tree"></i>';
    map1.style.display = "block";
    map2.style.display = "none";
    panzoom1.reset();
    panzoom1.zoom(0.5);
    panzoom2.zoom(0.5);
  }

  pill.classList.toggle("active");
}
