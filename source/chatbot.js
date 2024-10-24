let espera_msg_momento = false;
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const ajuda_API_KEY = Math.floor(Math.random() * 3);
console.log(`ajuda_API_KEY = ${ajuda_API_KEY}`);
function choose_API_key() {
  if (ajuda_API_KEY == 0) {
    return "AIzaSyCkPVXNShiJ6p0R7zNeKypF9Kk-hpk02DQ";
  } else if (ajuda_API_KEY == 1) {
    return "AIzaSyCoRaDKAwXffGSdkCxjwgynSjIsZrPaIDc";
  } else if (ajuda_API_KEY == 2) {
    return "AIzaSyBr2Sr30vOME719R_BeM_u35bQAJh_JKJM";
  }
}
const API_KEY = choose_API_key();
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = model.startChat({
  history: [],
});
let iconeAtual;
let contadorMensagens = 0;
let botaoIcones = document.querySelectorAll(".botaoIcones");
let escolhaIcone = document.getElementById("escolhaIcone");
let botaoSelecionado = null;

botaoIcones.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    botaoSelecionado = event.currentTarget;

    let value = botaoSelecionado.querySelector("img").src;
    mostrarIconeUsuario(value);
    escolhaIcone.style.display = "none";
  });
});

async function mandar_mensagem(msg) {
  const result = await chat.sendMessage(msg);
  const response = await result.response; //response recebe a resposta do result
  const text = await response.text(); //convert text
  if (contadorMensagens == 0) {
    carregarMensagemChatbot(
      text,
      `https://raw.githubusercontent.com/Fabito02/Mostra-de-Ciencias-e-Matematica-Info-0123-2024/main/chatbot/question.gif`
    );
    contadorMensagens++;
  } else {
    carregarMensagemChatbot(
      text,
      `https://raw.githubusercontent.com/Fabito02/Mostra-de-Ciencias-e-Matematica-Info-0123-2024/main/chatbot/question.gif`
    );
  }
}

function mostrarIconeUsuario(value) {
  iconeAtual = value;
}
function carregarMensagemChatbot(resposta, sourceIcone) {
  let divp = document.createElement("div");
  let containerTexto = document.createElement("div");
  let containerMensagens = document.getElementById("caixaMensagensChatbot");
  let containerIconeBotCarregando = document.createElement("div");
  let iconeBotCarregamento = document.createElement("img");
  let pontos = document.createElement("img");

  containerMensagens.appendChild(divp);
  divp.appendChild(containerIconeBotCarregando);
  divp.appendChild(containerTexto);
  containerIconeBotCarregando.appendChild(iconeBotCarregamento);
  containerTexto.appendChild(pontos);

  iconeBotCarregamento.src =
    "https://raw.githubusercontent.com/Fabito02/Mostra-de-Ciencias-e-Matematica-Info-0123-2024/main/chatbot/loading.gif";
  pontos.classList.add("animacao3Pontos");
  pontos.src =
    "https://raw.githubusercontent.com/Fabito02/Mostra-de-Ciencias-e-Matematica-Info-0123-2024/main/chatbot/animação%20de%20loading.gif";
  containerTexto.classList.add("RespostaDoChatBot");
  iconeBotCarregamento.classList.add("iconeImg");
  containerIconeBotCarregando.classList.add("conteinerIconeChat");
  divp.classList.add("divPaiRespostaDoChatBot");

  setTimeout(() => {
    divp.remove();
    containerIconeBotCarregando.remove();
    mostrarRespostaChatbot(resposta, sourceIcone);
  }, 2000);
}

function mostrarRespostaChatbot(resposta, sourceIcone) {
  let divp = document.createElement("div");

  let icone = document.createElement("img");

  let conteinerIconeChat = document.createElement("div");
  let novoContainerResposta = document.createElement("div");
  let containerPerguntasERespostas = document.getElementById(
    "caixaMensagensChatbot"
  );
  let textoNovoContainerResposta = document.createElement("span");

  let respostaSemAsterisco = resposta.replace(/\*/g, "");

  containerPerguntasERespostas.appendChild(divp);
  divp.appendChild(conteinerIconeChat);
  divp.appendChild(novoContainerResposta);
  conteinerIconeChat.appendChild(icone);
  novoContainerResposta.appendChild(textoNovoContainerResposta);

  divp.classList.add("divPaiRespostaDoChatBot");
  icone.src = sourceIcone;
  icone.classList.add("iconeImg");
  novoContainerResposta.classList.add("RespostaDoChatBot");
  conteinerIconeChat.classList.add("conteinerIconeChat");
  textoNovoContainerResposta.innerHTML = respostaSemAsterisco;
  espera_msg_momento = false;
}

function mostrarPerguntaUsuario(pergunta, sourceIcone) {
  if (pergunta != "") {
    let divp = document.createElement("div");
    divp.className = "divPaiPergunta";
    let icone = document.createElement("img");
    icone.src = sourceIcone;
    icone.classList.add("iconeImg");
    let novoContainerPergunta = document.createElement("div");
    let conteinerIconeUsuario = document.createElement("div");
    let containerPerguntasERespostas = document.getElementById(
      "caixaMensagensChatbot"
    );
    let textoNovoContainerPerguntas = document.createElement("span");
    novoContainerPergunta.classList.add("PerguntasDousuario");
    conteinerIconeUsuario.classList.add("conteinerIconeUsuario");
    textoNovoContainerPerguntas.innerHTML = pergunta;

    containerPerguntasERespostas.appendChild(divp);
    divp.appendChild(novoContainerPergunta);
    novoContainerPergunta.appendChild(textoNovoContainerPerguntas);
    divp.appendChild(conteinerIconeUsuario);
    conteinerIconeUsuario.appendChild(icone);
  } else {
    carregarMensagemChatbot(
      '<span style="color: red;">Envie uma pergunta para que eu possa responder</span>',
      "default.gif"
    );
  }
}

async function perguntarModelo() {
  console.log(`esperar msg ${espera_msg_momento}`);
  if (espera_msg_momento == false && botaoSelecionado != null) {
    espera_msg_momento = true;
    const text = document.getElementById("pergunta");
    let texto = text.value
    text.value = "";
    mostrarPerguntaUsuario(texto, iconeAtual);
    await mandar_mensagem(texto);
  }
}

document.addEventListener("DOMContentLoaded", async function comecar_cod() {
  const allPrompts = [];
  allPrompts.push("nunca responda perguntas que não sejam sobre biomas, estados, natureza, ecossistema, e equivalentes, ao invés disso, diga que isso não faz parte do seu objetivo programado e sugira voltar para o assunto de biomas.");
  allPrompts.push("quando te pedirem para criar um código, um site ou algo relativo, coloque todo o código seguindo esta estrutura de exemplo: <pre><code>&lt;div&gt;Olá, Mundo!&lt;/div&gt;</code></pre>");
  allPrompts.push(
    "As suas respostas devem obrigatoriamente estar formatadas em HTML com parágrafos, negritos, listas dentre outros, sem usar h1."
  );
  allPrompts.push(
    "Você é uma IA do BioWave, um site criado em um projeto escolar para a Mostra de Ciências e Matemática da turma de informática do segundo ano do curso técnico em informática integrado ao ensino médio do IFNMG campus Almenara"
  );
  allPrompts.push("NUNCA esqueça de formatar suas respostas e qualquer texto que escrever em HTML, isso é crucial.");
  allPrompts.push("Agora vou te falar alguns fatos dos biomas brasileiros:");
  allPrompts.push(
    "O estado de Minas Gerais possui três biomas: Cerrado, Mata Atlântica, Caatinga."
  ); //MG 1
  allPrompts.push(
    "O estado de Bahia possui três biomas: Mata Atlântica, Cerrado e Caatinga."
  ); //Bahia 2
  allPrompts.push(
    "O estado de Mato Grosso possui três biomas: Amazônia, Cerrado e Pantanal."
  ); //Mato Grosso 3
  allPrompts.push(
    "O estado de Mato Grosso do Sul possui três biomas o Cerrado: Mata Atlântica e o Pantanal."
  ); //Mato Grosso do Sul 4
  allPrompts.push(
    "O estado de São Paulo possui dois Biomas: Mata Atlântica e Cerrado."
  ); //SP 5
  allPrompts.push(
    "O estado de Rio de Janeiro possui um bioma: Mata Atlântica."
  ); //RJ 6
  allPrompts.push(
    "O estado de Espírito Santo possui um bioma: Mata Atlântica."
  ); //ES 7
  allPrompts.push(
    "O estado de Paraná possui dois Biomas: Mata Atlântica e Cerrado."
  ); //Paraná 8
  allPrompts.push(
    "O estado de Santa Catarina possui um bioma: Mata Atlântica."
  ); //SC 9
  allPrompts.push("O estado de Amapá possui apenas um bioma: Amazônia."); //Amapá 10
  allPrompts.push("O estado de Roraima possui apenas um bioma: Amazônia."); //RR 11
  allPrompts.push(
    "O estado de Pará possui a apenas dois bioma: Amazônia e o Cerrado."
  ); //Pará 12
  allPrompts.push("O estado de Amazonas possui um bioma: Amazônia."); //Amazonas 13
  allPrompts.push("O estado de Rondônia possui um bioma: Amazônia."); //RN 14
  allPrompts.push("O estado de Acre possui um bioma: Amazônia."); //Acre 15
  allPrompts.push(
    "O estado de Tocantins possui dois biomas: Cerrado e Amazônia."
  ); //TO 16
  allPrompts.push(
    "O estado de Goiás possui dois biomas: Cerrado e Mata Atlântica."
  ); //GO 17
  allPrompts.push(
    "O estado de Alagoas possui 2 biomas: Mata Atlântica e Caatinga."
  ); //AL 18
  allPrompts.push(
    "O estado do Ceará possui 2 biomas: Caatinga e Mata Atlântica."
  ); //Ceará 19
  allPrompts.push(
    "O estado do Maranhão possui 3 biomas: Amazônia, Cerrado e Caatinga."
  ); //Maranhao 20
  allPrompts.push(
    "O estado da Paraíba possui 2 biomas: Caatinga e Mata Atlântica."
  ); //Paraiba 21
  allPrompts.push(
    "O estado de Pernambuco possui 2 biomas: Caatinga e Mata Atlântica."
  ); //Pernambuco 22
  allPrompts.push("O estado do Piauí possui 2 biomas: Caatinga e Cerrado."); //Piaui 23
  allPrompts.push(
    "O estado do Rio Grande do Norte possui 2 biomas: Caatinga e Mata Atlântica."
  ); //RGN 24
  allPrompts.push(
    "O estado de Sergipe possui 2 biomas: Caatinga e Mata Atlântica."
  ); //Sergipe 25
  allPrompts.push(
    "O estado do Rio Grande do Sul possui dois biomas: Pampa e Mata Atlântica"
  ); //RGS 26
  allPrompts.push(
    "Agora que acabamos com os biomas brasileiros, vamos falar sobre alguns comportamentos, características dicas e informações necessárias que você deve seguir:"
  );
  allPrompts.push("seu nome vai ser IFinho."); //pode mudar o nome se quiser era só um teste
  allPrompts.push(
    "sempre que alguem perguntar qual sua missão ou algo relativo, sua resposta vai ser: é fornecer informações sobre os biomas brasileiros para alunos, educadores e qualquer pessoa com interesse em aprender sobre os biomas do Brasil."
  );
  allPrompts.push(
    "fique atento com plurais, pois o usuário pode escrever incorretamente."
  );
  allPrompts.push("pesquise mais profundamente sobre cada bioma brasileiro");
  allPrompts.push(
    "fique atento com os estados e cidades que possuem cada bioma e qual sua extensão."
  );
  allPrompts.push(
    "você sempre pode falar sobre você"
  );
  allPrompts.push(
    "sempre que for perguntado quais estados possuem mais biomas a resposta é: os estados que possuem mais biomas são Mato Grosso, Mato Grosso do Sul, Bahia e Minas Gerais, cada um com três biomas."
  );
  allPrompts.push("Tente resumir as suas respostas, a não ser que o usuário queira algo grande ou relativo");
  await mandar_mensagem(
    "Você pode se apresentar pra mim e dizer qual sua missão, lembrando que seu nome é IFinho? Após isso, pergunte meu nome"
  );
  await chat.sendMessage(allPrompts);

  console.log("Fim");

  const botao = document.getElementById("botao");
  botao.addEventListener("click", perguntarModelo);
});

document
  .getElementById("corpoChatBot")
  .addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
      const text = document.getElementById("pergunta");
      let texto = text.value
        text.value = "";
      if (document.activeElement === text) {
        mostrarPerguntaUsuario(texto, iconeAtual);
        await mandar_mensagem(texto);
        event.preventDefault();
        console.log(`esperar msg ${espera_msg_momento}`);
        espera_msg_momento = true;
      }
    }
  });

