const estados = document.querySelectorAll(".estado");
const key = "00d597d79abf4aaebac53307242208";
const lang = "pt";
var estadosData = {};

// carrega os dados do JSON para estados
function carregarEstados() {
  return fetch("source/dados-estados.json")
    .then((response) => response.json())
    .then((dados) => {
      estadosData = dados;
    })
    .catch((error) => {
      console.error("Erro ao carregar estados:", error);
    });
}

// carrega os dados do JSON para biomas
function carregarBiomas() {
  return fetch("source/dados-biomas.json")
    .then((response) => response.json())
    .then((dados) => {
      biomasData = dados;
      console.log();
    })
    .catch((error) => {
      console.error("Erro ao carregar biomas:", error);
    });
}

const tempoAtualizacao = 5 * 60 * 1000; // 5 minutos
const cacheClima = {};

// Pequeno script para criar um cache para os climas e diminuir as chamadas na API

function getClima(city) {
  console.log();
  const agora = new Date().getTime();
  if (
    cacheClima[city] &&
    agora - cacheClima[city].timestamp < tempoAtualizacao
  ) {
    return Promise.resolve(cacheClima[city].data); // Retorna uma Promise resolvida com os dados em cache
  } else {
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cacheClima[city] = {
          data: data,
          timestamp: agora,
        };
        console.log(`Cache do clima da cidade "${city}" atualizado`);
        return data;
      })
      .catch((error) => {
        console.error("Erro:", error);
        throw error;
      });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let elementoFlutuante = document.getElementById("elementoFlutuante1");

  // carregar os dados dos estados
  carregarEstados().then(function () {
    estados.forEach((estado) => {
      estado.addEventListener("mouseenter", function () {
        let code = estado.getAttribute("code");
        let estadoData = estadosData[code];

        if (estadoData) {
          let city = estadoData.city;

          if (city) {
            getClima(city)
              .then((data) => {
                const iconUrl = data.current.condition.icon;
                const clima = `<img src="${iconUrl}" alt="Ícone do clima atual" class="iconClima icon"> <marquee scrollamount="5" class="textoElementoFlutuante textoClima">${data.current.temp_c}°C, ${data.current.condition.text} - ${city}</marquee>`;
                elementoFlutuante.querySelector("#clima").innerHTML = clima;
              })
              .catch((error) => {
                console.error("Erro:", error);
                elementoFlutuante.querySelector("#clima").innerHTML =
                  '<p style="color: red; font-size: 14px; transform: translateX(-20px)">Erro ao obter o clima!<br>Sem conexão</p>';
              });
          } else {
            elementoFlutuante.querySelector("#clima").innerHTML = "";
          }

          // outros dados do estado
          elementoFlutuante.querySelector("#img").src = estadoData.img;
          elementoFlutuante.querySelector("#nomeEstado").innerHTML =
            estadoData.nomeEstado;
          elementoFlutuante.querySelector("#territorio").innerHTML =
            estadoData.extensaoTerritorial;
          elementoFlutuante.querySelector("#habitantes").innerHTML =
            estadoData.habitantes;
          elementoFlutuante.querySelector("#biomas").innerHTML =
            estadoData.biomas;
          elementoFlutuante.querySelector("#fontesEnergeticas").innerHTML =
            estadoData.fontesEnergeticas;

          // mostrar o elemento flutuante que segue o mouse
          elementoFlutuante.classList.add("show");
        }
      });

      estado.addEventListener("mouseleave", function () {
        elementoFlutuante.classList.remove("show");
      });
    });

    // atualizar a posição do elemento flutuante de acordo com o movimento do mouse
    document.addEventListener("mousemove", (e) => {
      if (elementoFlutuante.classList.contains("show")) {
        elementoFlutuante.style.left = `${e.pageX + 20}px`;
        elementoFlutuante.style.top = `${e.pageY + 10}px`;

        const bounding = elementoFlutuante.getBoundingClientRect();
        
        if (bounding.right > window.innerWidth) {
          elementoFlutuante.style.left = `${window.innerWidth - bounding.width - 10}px`;
        }
        
        if (bounding.bottom > window.innerHeight) {
          elementoFlutuante.style.top = `${window.innerHeight - bounding.height - 10}px`;
        }
      }
    });
  });
});

const biomas = document.querySelectorAll(".bioma");
var biomasData = {};

carregarBiomas();

document.addEventListener("DOMContentLoaded", function () {
  let elementoFlutuante = document.getElementById("elementoFlutuante2");

  // carregar os dados dos estados
  carregarBiomas().then(function () {
    biomas.forEach((bioma) => {
      bioma.addEventListener("mouseenter", function () {
        let code = bioma.getAttribute("code");
        let biomaData = biomasData[code];

        if (biomaData) {
          // outros dados do bioma
          elementoFlutuante.querySelector("#img").src = biomaData.img;
          elementoFlutuante.querySelector("#nomeBioma").innerHTML =
            biomaData.nomeBioma;
          elementoFlutuante.querySelector("#tipoClima").innerHTML =
            biomaData.tipoClima;
          elementoFlutuante.querySelector("#territorio").innerHTML =
            biomaData.extensaoTerritorial;
          elementoFlutuante.querySelector("#ameacas").innerHTML =
            biomaData.ameacas;
          elementoFlutuante.querySelector("#fontesEnergeticas").innerHTML =
            biomaData.fontesEnergeticas;

          // mostrar o elemento flutuante que segue o mouse
          elementoFlutuante.classList.add("show");
        }
      });

      bioma.addEventListener("mouseleave", function () {
        elementoFlutuante.classList.remove("show");
      });
    });

    // atualizar a posição do elemento flutuante de acordo com o movimento do mouse
    document.addEventListener("mousemove", (e) => {
      if (elementoFlutuante.classList.contains("show")) {
        elementoFlutuante.style.left = `${e.pageX + 20}px`;
        elementoFlutuante.style.top = `${e.pageY + 10}px`;

        const bounding = elementoFlutuante.getBoundingClientRect();
        
        if (bounding.right > window.innerWidth) {
          elementoFlutuante.style.left = `${window.innerWidth - bounding.width - 10}px`;
        }
        
        if (bounding.bottom > window.innerHeight) {
          elementoFlutuante.style.top = `${window.innerHeight - bounding.height - 10}px`;
        }
      }
    });
  });
});

function abrirCaixasFlutuantesEstados() {
  document.querySelectorAll(".floatItem").forEach((caixa) => {
    caixa.classList.add("hide");
  });

  let informacoesBase = document.querySelector(".conteudoInformacoesBase");
  informacoesBase.innerHTML = "";
  informacoesBase.innerHTML =
    '<div class="infoElemento"><span class="item"><p class="textoElementoFlutuante" id="territorio"></p></span></div><div class="infoElemento"><span class="item"><p class="textoElementoFlutuante" id="habitantes"></p></span></div><div class="infoElemento"><span class="clima" id="clima"></span></div><div class="infoElemento"><div class="icones" id="biomas"></div></div><div class="infoElemento topicoFinal"><div class="icones" id="fontesEnergeticas"></div></div>';

  // Exibir caixas flutuantes e botão de fechar
  document.querySelectorAll(".floatItem1").forEach((caixa) => {
    caixa.classList.remove("hide");
  });
  document.querySelector(".fecharCaixasFlutuantes").classList.remove("hide");

  // carregar os dados dos estados
  document.querySelectorAll(".estado").forEach((estado) => {
    estado.addEventListener("click", function () {
      let code = estado.getAttribute("code");
      let estadoData = estadosData[code];

      if (estadoData) {
        let city = estadoData.city;

        if (city) {
          getClima(city)
            .then((data) => {
              var descricaoClima = data.current.condition.text
              const iconUrl = data.current.condition.icon;
              const clima = `<img src="${iconUrl}" alt="Ícone do clima atual" class="iconClima icon" id="iconClima"> <marquee scrollamount="5" class="textoElementoFlutuante textoClima">${data.current.temp_c}°C, ${data.current.condition.text} - ${city}</marquee>`;
              informacoesBase.querySelector("#clima").innerHTML = clima;
            })
            .catch((error) => {
              console.error("Erro:", error);
              informacoesBase.querySelector("#clima").innerHTML =
              '<p style="color: red; font-size: 14px; transform: translateX(-20px)">Erro ao obter o clima!<br>Sem conexão</p>';
            });
        } else {
          informacoesBase.querySelector("#clima").innerHTML = "";
        }

        // outros dados do estado
        informacoesBase.querySelector(
          "#territorio"
        ).innerHTML = `<i class="fa-solid fa-ruler-horizontal icon"></i> ${estadoData.extensaoTerritorial}`;
        informacoesBase.querySelector(
          "#habitantes"
        ).innerHTML = `<i class="fa-solid fa-users icon"></i> ${estadoData.habitantes}`;
        informacoesBase.querySelector("#biomas").innerHTML = estadoData.biomas;
        informacoesBase.querySelector("#fontesEnergeticas").innerHTML =
          estadoData.fontesEnergeticas;

        document.getElementById("imgBarraLateral").src = estadoData.img;
        document.getElementById("nomeEstadoBarraLateral").innerHTML =
          estadoData.nomeEstado;
        document.getElementById("imgBarraLateral").style.display = "block";
        document.getElementById("nomeEstadoBarraLateral").style.display =
          "flex";

        let topicos = document.querySelector(".topicos");
        topicos.querySelector(".biomasTopico").innerHTML =
          estadoData.biomasTopico;
        topicos.querySelector(".fontesEnergeticasTopico").innerHTML =
          estadoData.fontesEnergeticasTopico;
        topicos.querySelector(".reservasBiologicasTopico").innerHTML =
          estadoData.reservasBiologicasTopico;
        topicos.querySelector(".reservasHidricasTopico").innerHTML =
          estadoData.reservasHidricasTopico;
        topicos.querySelector(".cultura").innerHTML = estadoData.cultura;
        topicos.querySelector(".historia").innerHTML = estadoData.historia;
        topicos.querySelector(".questoesGeograficas").innerHTML =
          estadoData.questoesGeograficas;
        topicos.querySelector(".impactosAmbientais").innerHTML =
          estadoData.impactosAmbientais;
      }

      abrirBarraLateral();
    });
  });
}

function abrirCaixasFlutuantesBiomas() {
  document.querySelectorAll(".floatItem").forEach((caixa) => {
    caixa.classList.add("hide");
  });

  let informacoesBase = document.querySelector(".conteudoInformacoesBase");
  informacoesBase.innerHTML = "";
  informacoesBase.innerHTML =
    '<div class="infoElemento"><span class="item"><p class="textoElementoFlutuante" id="territorio"></p></span></div><div class="infoElemento"><span class="item"><p class="textoElementoFlutuante" id="tipoClima"></p></span></div><div class="infoElemento"><div class="icones" id="ameacas"></div></div><div class="infoElemento topicoFinal"><div class="icones" id="fontesEnergeticas"></div></div></div>';

  // Exibir caixas flutuantes e botão de fechar
  document.querySelectorAll(".floatItem2").forEach((caixa) => {
    caixa.classList.remove("hide");
  });
  document.querySelector(".fecharCaixasFlutuantes").classList.remove("hide");

  // carregar os dados dos biomas
  document.querySelectorAll(".bioma").forEach((bioma) => {
    bioma.addEventListener("click", function () {
      let code = bioma.getAttribute("code");
      let biomaData = biomasData[code];

      if (biomaData) {
        // outros dados do bioma
        informacoesBase.querySelector(
          "#territorio"
        ).innerHTML = `<i class="fa-solid fa-ruler-horizontal icon"></i> ${biomaData.extensaoTerritorial}`;
        informacoesBase.querySelector("#fontesEnergeticas").innerHTML =
          biomaData.fontesEnergeticas;
        informacoesBase.querySelector(
          "#tipoClima"
        ).innerHTML = `<i class="fa-solid fa-cloud-sun icon"></i> ${biomaData.tipoClima}`;
        informacoesBase.querySelector("#ameacas").innerHTML = biomaData.ameacas;

        document.getElementById("imgBarraLateral").src = biomaData.img;
        document.getElementById("nomeEstadoBarraLateral").innerHTML =
          biomaData.nomeBioma;
        document.getElementById("imgBarraLateral").style.display = "block";
        document.getElementById("nomeEstadoBarraLateral").style.display =
          "flex";

        let topicos = document.querySelector(".topicos2");

        topicos.querySelector(".vegetacao").innerHTML = biomaData.vegetacao;
        topicos.querySelector(".climaTopico").innerHTML = biomaData.clima;
        topicos.querySelector(".rios").innerHTML = biomaData.rios;
        topicos.querySelector(".especies").innerHTML = biomaData.especies;
        topicos.querySelector(".animaisAmeacados").innerHTML = biomaData.animaisAmeacados;
        topicos.querySelector(".reservasBiologicas").innerHTML = biomaData.reservasBiologicas;
        topicos.querySelector(".fontesEnergeticas").innerHTML = biomaData.fontesEnergeticasTopico;
      }

      abrirBarraLateral();
    });
  });
}
