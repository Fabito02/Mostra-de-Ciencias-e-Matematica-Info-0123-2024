//Script para o zoom no mapa usando a API Panzoom
const mapa1 = document.getElementById("map1");
const panzoom1 = Panzoom(mapa1, {
  maxScale: 5,
  minScale: 0.3,
  zoomWithWheel: true,
  pinchToZoom: true,
});

const mapa2 = document.getElementById("map2");
const panzoom2 = Panzoom(mapa2, {
  maxScale: 5,
  minScale: 0.3,
  zoomWithWheel: true,
  pinchToZoom: true,
});

panzoom1.zoom(0.65, {
  animate: true,
  duration: 1500,
  easing: "cubic-bezier(0.3, 2.5, 0.6, 1)",
});

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
  panzoom1.zoomIn(0.5, { animate: true });
  panzoom2.zoomIn(0.5, { animate: true });
}

function zoomOut() {
  panzoom1.zoomOut(0.5, { animate: true });
  panzoom2.zoomOut(0.5, { animate: true });
}

// Script responsável por abrir os tópicos e sumário
function openTopic(topico) {
  if (topico.parentElement.classList.contains("active") === true) {
    topico.parentElement.classList.remove("active");
  } else {
    let allTopics = document.querySelectorAll(".floatItem");
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

function openSumario(sumario) {
  if (sumario.parentElement.classList.contains("active") === true) {
    sumario.parentElement.classList.remove("active");
  } else {
    let allTopics = document.querySelectorAll(".sumario");
    allTopics.forEach(function (elemento) {
      elemento.classList.remove("active");
    });

    sumario.parentElement.classList.add("active");
  }
}

function fecharSumario(sumario) {
  if (sumario.parentElement.classList.contains("active") === true) {
    sumario.parentElement.classList.remove("active");
  } else {
    let allTopics = document.querySelectorAll(".sumario");
    allTopics.forEach(function (elemento) {
      elemento.classList.remove("active");
    });
  }
}

// Função para fechar elemento flutuante
function fecharCaixasFlutuantes(e) {
  e.classList.add("hide");
  document.querySelectorAll(".floatItem").forEach((caixa) => {
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
  // Verifica se a largura da tela é menor ou igual a 920px
  if (window.innerWidth <= 920) {
    document
      .querySelector(".barraLateral")
      .classList.remove("barraLateralFechada");

    const corpoSumario = document.getElementsByClassName("corpoSumario")[0];
    if (corpoSumario) {
      fecharSumario(corpoSumario);
    }
  }
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
    panzoom1.zoom(0.65);
    panzoom2.zoom(0.65);
  } else {
    pill.innerHTML = '<span class="material-symbols-rounded">forest</span>';
    map1.style.display = "block";
    map2.style.display = "none";
    panzoom1.reset();
    panzoom1.zoom(0.65);
    panzoom2.zoom(0.65);
  }

  pill.classList.toggle("active");
}

var iconesData = {}

function carregarIconesDescricao() {
  return fetch("source/descricao_icone.json")
    .then((response) => response.json())
    .then((dados) => {
      iconesData = dados;
    })
    .catch((error) => {
      console.error("Erro ao carregar dados de icones:", error);
    });
}

carregarIconesDescricao()

document.addEventListener("mouseenter", function(e) {
  if (e.target.classList && e.target.classList.contains('iconeSumario')) {// seleciona o elemento flutuante
    const elementoFlutuanteIconeSumario = document.getElementById("elementoFlutuanteIconeSumario");
    
    // seleciona todos os ícones com a classe "iconeSumario"
    var icones = document.querySelectorAll(".iconeSumario");
    
    icones.forEach((icone) => {
      icone.addEventListener("mouseenter", function () {
        let nome = this.querySelector('span').innerHTML.trim()
        let descricao = iconesData[nome]
        elementoFlutuanteIconeSumario.innerHTML = descricao
        elementoFlutuanteIconeSumario.classList.add("show");
      });
    
      icone.addEventListener("mouseleave", function () {
        elementoFlutuanteIconeSumario.classList.remove("show");
      });

      icone.addEventListener("touchstart", function (e) {
        let nome = this.querySelector('span').innerHTML.trim();
        let descricao = iconesData[nome];
        elementoFlutuanteIconeSumario.innerHTML = descricao;
        elementoFlutuanteIconeSumario.classList.add("show");
  
        elementoFlutuanteIconeSumario.style.left = `${e.touches[0].pageX + 10}px`;
        elementoFlutuanteIconeSumario.style.bottom = `${e.touches[0].pageY - 30}px`;
      });
  
      icone.addEventListener("touchend", function () {
        elementoFlutuanteIconeSumario.classList.remove("show");
      });
    
      // Atualizar a posição do elemento flutuante de acordo com o movimento do mouse
      icone.addEventListener("mousemove", (e) => {
        if (elementoFlutuanteIconeSumario.classList.contains("show")) {
          elementoFlutuanteIconeSumario.style.left = `${e.pageX + 0}px`;
          elementoFlutuanteIconeSumario.style.top = `${e.pageY - 30}px`;
        }
      });
    }, { once: true });
  }
}, true)