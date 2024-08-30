//Script para o zoom no mapa usando a API Panzoom
const mapa = document.getElementById('map');
const panzoom = Panzoom(mapa, {
    maxScale: 15,
    minScale: 0.8,
    zoomWithWheel: true,
    pinchToZoom: true,
});
panzoom.zoom(1.8, { animate: true });

// controles de zoom com rotação do mouse
mapa.addEventListener('wheel', (event) => {
    event.preventDefault();
    panzoom.zoomWithWheel(event);
});

// Funções de zoom com os botões de zoom
function zoomIn() {
    panzoom.zoomIn(0.3, { animate: true });
}

function zoomOut() {
    panzoom.zoomOut(0.3, { animate: true });
}

// Script responsável por abrir os tópicos e sumário
function openTopic(topico) {

    if (topico.parentElement.classList.contains('active') === true) {

        topico.parentElement.classList.remove('active');
    } else {
        let allTopics = document.querySelectorAll('.topico .sumario');
        allTopics.forEach(function(elemento) {
            elemento.classList.remove('active');
        });
        
        topico.parentElement.classList.add('active');
    }
	
    document.addEventListener('click', function fecharClickFora(event) {
        if (!topico.parentElement.contains(event.target)) {
            topico.parentElement.classList.remove('active');
            document.removeEventListener('click', fecharClickFora);
        }
    });
}

// Função para fechar elemento flutuante
function fecharCaixasFlutuantes(e) {
    e.classList.add('hide');
    document.querySelectorAll('#caixaFlutuante').forEach(caixa => {
        caixa.classList.add('hide');
    });
}

const modal = document.getElementById('modalExpandir');
//funcão para expandir os dados do tópico e funcão para fechar modal
function expandirTopico(topico) {
    const elemento = topico.parentElement;
    const texto = elemento.querySelector('.conteudoTopico').innerHTML;
    
    modal.querySelector('.text').innerHTML = texto;
    modal.querySelector('#title').innerHTML = elemento.querySelector('.titleTopico').innerHTML;

    modal.style.display = "flex";
}


function fecharModal(e) {
    e.parentElement.parentElement.style.display = 'none'
}

function fecharBarraLateral() {
    document.querySelector('.barraLateral').classList.add('barraLateralFechada');
}

function abrirBarraLateral() {
    document.querySelector('.barraLateral').classList.remove('barraLateralFechada');
}
  
window.onclick = function(event) {
    if (event.target == document.getElementById('map') && !event.target == document.getElementById('svg-map')) {
        fecharBarraLateral();
    }
}