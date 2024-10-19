let blogData = {}

// carrega os dados do JSON para strings do blog
function carregarStrings() {
    return fetch("source/stringsBlog.json")
      .then((response) => response.json())
      .then((dados) => {
        blogData = dados;
        console.log();
      })
      .catch((error) => {
        console.error("Erro ao carregar strings:", error);
      });
}

carregarStrings()

document.getElementById('materia').style.display = "none"
document.getElementById('materiaNaoAberta').style.display = "flex"

function carregarMateria(e) {
    document.getElementById('materia').style.display = "flex"
    document.getElementById('materiaNaoAberta').style.display = "none"

    let code = e.getAttribute("code")
    let materiaData = blogData[code]
    if (materiaData) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        let materia = document.querySelector(".materia")

        materia.querySelector('.tituloMateria').innerHTML = `${materiaData.titulo}<div class="dataMateria">${materiaData.data}</div>`
        materia.querySelector('.imgMateria').src = materiaData.linkImgMateria
        materia.querySelector('.descricaoImagemMateria').innerHTML = materiaData.descricaoImagemMateria
        materia.querySelector('.conteudoMateria').innerHTML = materiaData.conteudoMateria
        materia.querySelector('.imgAutor').src = materiaData.linkFotoAutor
        materia.querySelector('.nome').innerHTML = materiaData.nomeAutor
        materia.querySelector('.minibio').innerHTML = materiaData.minibio
    }
}

function fecharMateria() {
  document.getElementById('materia').style.display = "none"
  document.getElementById('materiaNaoAberta').style.display = "flex"
}