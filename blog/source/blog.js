var blogData = {};

// Carrega os dados do JSON para strings do blog
function carregarStrings() {
  return fetch("source/stringsBlog.json")
    .then((response) => response.json())
    .then((dados) => {
      blogData = dados;
    })
    .catch((error) => {
      console.error("Erro ao carregar strings:", error);
    });
}

carregarStrings().then(() => {
  document.getElementById('materia').style.display = "none";
  document.getElementById('materiaNaoAberta').style.display = "flex";
    let hash = window.location.hash;
    if (hash) {
      let codigo = hash.replace('#', '');
      codigo = decodeURIComponent(codigo).trim();
      carregarMateriaLink(codigo);
    }
});

function preencherDados(materiaData) {
  let materia = document.querySelector(".materia");

  materia.querySelector('.tituloMateria').innerHTML = `${materiaData.titulo}<div class="dataMateria">${materiaData.data}</div>`;
  materia.querySelector('.imgMateria').src = materiaData.linkImgMateria;
  materia.querySelector('.descricaoImagemMateria').innerHTML = materiaData.descricaoImagemMateria;
  materia.querySelector('.imgMateria').setAttribute("alt", materiaData.fonte);
  materia.querySelector('.fonteImagem').innerHTML = materiaData.fonte;
  materia.querySelector('.conteudoMateria').innerHTML = materiaData.conteudoMateria;
  materia.querySelector('.imgAutor').src = materiaData.linkFotoAutor;
  materia.querySelector('.nome').innerHTML = materiaData.nomeAutor;
  materia.querySelector('.minibio').innerHTML = materiaData.minibio;
}

function carregarMateria(e) {
  document.getElementById('materia').style.display = "flex";
  document.getElementById('materiaNaoAberta').style.display = "none";

  let code = e.getAttribute("code");
  let materiaData = blogData[code];
  if (materiaData) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    preencherDados(materiaData);
  }
}

function fecharMateria() {
  document.getElementById('materia').style.display = "none";
  document.getElementById('materiaNaoAberta').style.display = "flex";
  window.location.href = "#";
}

function carregarMateriaLink(codigo) {
  console.log(codigo);

  let code = 0;

  switch (codigo) {
    case "Amazônia: O pulmão do mundo está em perigo, que está em jogo?":
      code = 1;
      break;
    case "Biodiversidade e Atividades Econômicas no Pantanal.":
      code = 2;
      break;
    case "Conheça a diversidade e cultura do bioma cerrado.":
      code = 3;
      break;
    case "Pampa: O Coração Verde do Sul do Brasil.":
      code = 4;
      break;
    case "Caatinga: A Beleza Aridamente Resistente.":
      code = 5;
      break;
    case "Mata Atlântica: O Tesouro Verde do Brasil em Extinção.":
      code = 6;
      break;
    default:
      console.error(`Matéria não encontrada: ${codigo}`);
      return;
  }

  console.log("Carregando matéria com código:", code);
  let materiaData = blogData[code.toString()];
  if (materiaData) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    preencherDados(materiaData);
  
    document.getElementById('materia').style.display = "flex";
    document.getElementById('materiaNaoAberta').style.display = "none";
  }
}
