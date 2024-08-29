const noticias = {
  noticia1: {
    titulo:
      "Tite tem previsão de alta no sábado, e Matheus Bachi será o técnico em Flamengo x Bragantino",
    descricao: "Por Redação do ge — Rio de Janeiro",
    imagem: "https://s2-ge.glbimg.com/p7XdpS13phLsm_xRzYtrLy8rbyo=/0x0:7041x5040/600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/o/i/Mp2DJVSyiYTKWpicDcOw/19.jpg",
    data: "23/08/2024 17h40",
    texto: `<p>O Flamengo divulgou mais um comunicado sobre o quadro de saúde de Tite, internado por arritmia cardíaca, após passar mal na altitude de La Paz. O treinador deve ter alta no sábado e terá recomendação de repouso por 48h. Desta forma, Matheus Bachi, auxiliar técnico e filho do comandante, será o treinador contra o Bragantino, no domingo, no Maracanã, pelo Brasileirão.</p>
<p>Matheus Bachi terá os auxiliares Cléber Xavier e Cesar Sampaio no banco de reservas. A expectativa é que o treinador retorne ao Ninho do Urubu na segunda-feira já para a preparação para o duelo contra o Bahia, na quarta-feira, pelas quartas da Copa do Brasil.</p>`,
  },
};

let tituloNoticia = document.getElementById('titulo-noticia')
let publicado = document.getElementById('publicado')
let data = document.getElementById('data')
let imagem = document.getElementById('news-image')
let texto = document.getElementById('news-conteudo')

tituloNoticia.textContent = noticias.noticia1.titulo
publicado.textContent = noticias.noticia1.descricao
data.textContent = noticias.noticia1.data
imagem.src = noticias.noticia1.imagem
texto.innerHTML = noticias.noticia1.texto