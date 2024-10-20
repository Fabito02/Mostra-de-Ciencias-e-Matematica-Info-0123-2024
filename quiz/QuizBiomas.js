window.onload = blurStatus()

let pampas = {
    'Qual é a principal atividade econômica nos Pampas?': 'Pecuária',
    'Qual é a principal característica do solo nos Pampas?': 'Solo fértil com textura argilosa',
    'Qual é o principal animal ameaçado nos Pampas?': 'Pavão-marinheiro',
    'Qual é a adaptação das plantas dos Pampas?': 'Capacidade de crescimento rápido após pastagens',
    'Qual é uma ave emblemática dos Pampas?': 'Siriema',
    'Qual é a estação chuvosa nos Pampas?': 'Primavera e verão',
    'Qual é uma das principais fonte de água nos Pampas?': 'Águas subterrâneas',
    'Quais são os principais impactos ambientais nas pampas devido à atividade agrícola?': 'A erosão do solo',
};

let caatinga = {
    'Qual é uma das principais atividades econômicas da Caatinga?': 'Agricultura de subsistência',
    'Qual é a característica do solo da Caatinga?': 'Solo pobre em nutrientes e seco',
    'Qual é um animal ameaçado de extinção na Caatinga?': 'Tatu-bola',
    'Qual é a principal adaptação das plantas da Caatinga?': 'Folhas pequenas e resistentes à seca',
    'Qual é a estação chuvosa na Caatinga?': 'Verão',
    'Como a água é utilizada na Caatinga?': 'Irrigação para agricultura',
    'Qual é uma ave comum na Caatinga?': 'Canário da Terra',
    'Qual é o impacto das secas prolongadas na Caatinga?': 'Redução da vegetação e escassez de água',
};

let pantanal = {
    'Qual é a atividade econômica predominante no Pantanal?': 'Pecuária de gado',
    'Qual é a característica do solo do Pantanal?': 'Solo alagadiço e rico em matéria orgânica',
    'Qual é o impacto do desmatamento na fauna do Pantanal?': 'Redução de habitats e espécies ameaçadas',
    'Qual é o período de maior intensidade de chuvas no Pantanal?': 'Estação chuvosa (verão)',
    'Qual é um animal típico do Pantanal?': 'Capivara',
    'Qual é a principal fonte de água no Pantanal?': 'Rio Paraguai e áreas alagadas',
    'Como as plantas do Pantanal lidam com as cheias?': 'Possuem raízes flutuantes',
    'Qual animal do Pantanal é conhecido por suas longas pernas e adaptações para viver em ambientes alagados?': 'Cigana (tuiuiú)'
};


let mataAtlantica = {
    'Qual é a principal atividade econômica da Mata Atlântica?': 'Turismo e extração de recursos naturais',
    'Qual é a característica do solo da Mata Atlântica?': 'Solo fértil e úmido',
    'Qual é um dos principais animais ameaçados na Mata Atlântica?': 'Muriqui (ou mono-barrigudo)',
    'Como as plantas da Mata Atlântica se adaptam à umidade?': 'Folhas largas para captar luz e água',
    'Qual estação do ano é considerada a melhor para observar a biodiversidade na Mata Atlântica?':'Primavera',
    'Qual é um mamífero característico da Mata Atlântica?': 'Tamanduá-bandeira',
    'Qual é um impacto ambiental causado pela urbanização nas áreas costeiras da Mata Atlântica?': 'Erosão costeira',
    'Qual é o uso da água na Mata Atlântica?': 'Para abastecimento urbano e agricultura',
};

let cerrado = {
    'Qual é a principal cultura do Cerrado?': 'Soja e milho',
    'Qual é a característica do solo do Cerrado?': 'Solo ácido e pobre em nutrientes',
    'Qual é um dos principais animais ameaçados no Cerrado?': 'Lobo-guará',
    'Como as plantas do Cerrado se adaptam ao fogo?': 'Possuem cascas grossas e resiliência',
    'Qual é a estação seca mais pronunciada no Cerrado?': 'Inverno',
    'Qual é um dos principais animais ameaçados no Cerrado?': 'Lobo-guará',
    'Como a água é utilizada no Cerrado?': 'Irrigação de culturas como soja',
    'Qual é o impacto da pecuária no Cerrado?': 'Desmatamento e degradação do solo',
};

let florestaAmazonica = {
    'Qual é uma das principais atividades econômicas da Floresta Amazônica?': 'Exploração de recursos florestais',
    'Qual é a característica do solo da Floresta Amazônica?': 'Solo raso e pobre em nutrientes',
    'Qual é o principal mamífero ameaçado na Floresta Amazônica?': 'Onça-pintada',
    'Qual é a adaptação das árvores da Floresta Amazônica?': 'Folhagem densa para captar luz solar',
    'Qual é a estação chuvosa predominante na Floresta Amazônica?': 'Durante o ano todo, mas com aumento no verão',
    'Qual é uma ave típica da Floresta Amazônica?': 'Arara-azul',
    'Qual é o impacto da exploração de madeira na Floresta Amazônica?': 'Desmatamento e perda de biodiversidade',
    'Qual é o principal uso da água no Amazonas para as comunidades locais?': 'Para a pesca',
};


// Objeto sobre atividades econômicas
let atividadesEconomicas = {
    'Qual é a principal atividade econômica nos Pampas?': 'Pecuária',
    'Qual é uma das principais atividades econômicas da Caatinga?': 'Agricultura de subsistência',
    'Qual é a atividade econômica predominante no Pantanal?': 'Pecuária de gado',
    'Qual é a principal atividade econômica da Mata Atlântica?': 'Turismo e extração de recursos naturais',
    'Qual é o impacto da pecuária no Cerrado?': 'Desmatamento e degradação do solo',
    'Qual é uma das principais atividades econômicas da Floresta Amazônica?': 'Exploração de recursos florestais',
};

// Objeto sobre uso da água
let usoDaAgua = {
    'Qual é uma das principais fonte de água nos Pampas?': 'Águas subterrâneas',
    'Como a água é utilizada na Caatinga?': 'Irrigação para agricultura',
    'Qual é a principal fonte de água no Pantanal?': 'Rio Paraguai e áreas alagadas',
    'Qual é o uso da água na Mata Atlântica?': 'Para abastecimento urbano e agricultura',
    'Como a água é utilizada no Cerrado?': 'Irrigação de culturas como soja',
    'Qual é o principal uso da água no Amazonas para as comunidades locais?': 'Para a pesca',
};

// Objeto sobre animais ameaçados
let animaisAmeaçados = {
    'Qual é o principal animal ameaçado nos Pampas?': 'Pavão-marinheiro',
    'Qual é um animal ameaçado de extinção na Caatinga?': 'Tatu-bola',
    'Qual animal do Pantanal é conhecido por suas longas pernas e adaptações para viver em ambientes alagados?': 'Cigana (tuiuiú)',
    'Qual é um dos principais animais ameaçados na Mata Atlântica?': 'Muriqui (ou mono-barrigudo)',
    'Qual é um dos principais animais ameaçados no Cerrado?': 'Lobo-guará',
    'Qual é o principal mamífero ameaçado na Floresta Amazônica?': 'Onça-pintada',
};

// Objeto sobre adaptações das plantas
let adaptacaoPlantas = {
    'Qual é a adaptação das plantas dos Pampas?': 'Capacidade de crescimento rápido após pastagens',
    'Qual é a principal adaptação das plantas da Caatinga?': 'Folhas pequenas e resistentes à seca',
    'Como as plantas do Pantanal lidam com as cheias?': 'Possuem raízes flutuantes',
    'Como as plantas da Mata Atlântica se adaptam à umidade?': 'Folhas largas para captar luz e água',
    'Como as plantas do Cerrado se adaptam ao fogo?': 'Possuem cascas grossas e resiliência',
    'Qual é a adaptação das árvores da Floresta Amazônica?': 'Folhagem densa para captar luz solar',
};

// Objeto sobre aves e fauna
let avesEFauna = {
    'Qual é uma ave emblemática dos Pampas?': 'Siriema',
    'Qual é uma ave comum na Caatinga?': 'Canário da Terra',
    'Qual é um animal típico do Pantanal?': 'Capivara',
    'Qual é um mamífero característico da Mata Atlântica?': 'Tamanduá-bandeira',
    'Qual é uma ave comum no Cerrado?': 'Tucano',
    'Qual é uma ave típica da Floresta Amazônica?': 'Arara-azul',
};

// Objeto sobre impacto ambiental
let impactoAmbiental = {
    'Quais são os principais impactos ambientais nas pampas devido à atividade agrícola?': 'A erosão do solo',
    'Qual é o impacto das secas prolongadas na Caatinga?': 'Redução da vegetação e escassez de água',
    'Qual é o impacto das queimadas no Pantanal?': 'Destruição de habitat e diminuição da biodiversidade',
    'Qual é um impacto ambiental causado pela urbanização nas áreas costeiras da Mata Atlântica?':'Erosão Costeira',
    'Qual é o impacto da pecuária no Cerrado?': 'Desmatamento e degradação do solo',
    'Qual é o impacto da exploração de madeira na Floresta Amazônica?': 'Desmatamento e perda de biodiversidade',
};

// Objeto sobre características do solo
let caracteristicasDoSolo = {
    'Qual é a principal característica do solo nos Pampas?': 'Solo fértil com textura argilosa',
    'Qual é a característica do solo da Caatinga?': 'Solo pobre em nutrientes e seco',
    'Qual é a característica do solo do Pantanal?': 'Solo alagadiço e rico em matéria orgânica',
    'Qual é a característica do solo da Mata Atlântica?': 'Solo fértil e úmido',
    'Qual é a característica do solo do Cerrado?': 'Solo ácido e pobre em nutrientes',
    'Qual é a característica do solo da Floresta Amazônica?': 'Solo raso e pobre em nutrientes',
};

// Objeto sobre períodos de chuvas
let periodoDeChuvas = {
    'Qual é a estação chuvosa nos Pampas?': 'Primavera e verão',
    'Qual é a estação chuvosa na Caatinga?': 'Verão',
    'Qual é o período de maior intensidade de chuvas no Pantanal?': 'Estação chuvosa (verão)',
    'Qual estação do ano é considerada a melhor para observar a biodiversidade na Mata Atlântica?':'Primavera',
    'Qual é a estação seca mais pronunciada no Cerrado?': 'Inverno',
    'Qual é a estação chuvosa predominante na Floresta Amazônica?': 'Durante o ano todo, mas com aumento no verão'
};


// Juntando tudo em um único objeto de biomas
let biomasBrasileiros = {
    pampas,
    caatinga,
    pantanal,
    mataAtlantica,
    cerrado,
    florestaAmazonica,
    atividadesEconomicas,
    usoDaAgua,
    animaisAmeaçados,
    adaptacaoPlantas,
    avesEFauna,
    impactoAmbiental,
    caracteristicasDoSolo,
    periodoDeChuvas,
};


// Lista de biomas
let biomas = [pampas, caatinga, pantanal, mataAtlantica, cerrado, florestaAmazonica];

let caracteristicasBiomas = [atividadesEconomicas, usoDaAgua, animaisAmeaçados, periodoDeChuvas, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];

// Função para coletar todas as respostas erradas
function pegarTodasRespostas(numero, biomas, respCorreta) {
    let vetorRespostasErradas = [];

    let respostas = Object.values(biomas[numero]);
    for (let j = 0; j < respostas.length; j++) {
        if (respostas[j] !== respCorreta) {
            vetorRespostasErradas.push(respostas[j]);
        }
    }

    let vetorErradasSorteadas = []
    for (let i = 0; i < 2; i++) {
        let posicao = Math.floor(Math.random() * vetorRespostasErradas.length);
        vetorErradasSorteadas.push(vetorRespostasErradas[posicao]);
        vetorRespostasErradas.splice(posicao, 1);
    }

    return vetorRespostasErradas;
}


function sorteioAssunto(caracBiomas) {
    let numeroSort = Math.floor(Math.random() * caracBiomas.length);
    let biomaSelecionado = caracBiomas[numeroSort];

    // Sorteia uma pergunta específica dentro do bioma selecionado
    let vetorPerguntas = Object.keys(biomaSelecionado);
    let vetorRespostas = Object.values(biomaSelecionado);

    return {
        pergunta: vetorPerguntas,
        resposta: vetorRespostas,
        numero: numeroSort
    }
}

function selecionarPerguntasRespostas() {
    let caracteristicasBiomas2 = [atividadesEconomicas, usoDaAgua, animaisAmeaçados, periodoDeChuvas, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];
    let vetorRespostasselecionada = [];
    let vetorPerguntaseelecionada = [];
    let vetorTotalRespostasErradas = [];
    
    for (let i = 0; i < biomas.length; i++) {
        let varControl = 0;
        while (varControl < 2 && caracteristicasBiomas2.length > 0) {

            let objetosQuestoes = sorteioAssunto(caracteristicasBiomas2);
            let pergunta = objetosQuestoes.pergunta;
            let perguntaSorteada = pergunta[i];
            let resposta = objetosQuestoes.resposta;
            let respostaSorteada = resposta[i];
            let numeroSorteado = objetosQuestoes.numero;

            vetorPerguntaseelecionada.push(perguntaSorteada);
            vetorRespostasselecionada.push(respostaSorteada);

            let erradas = pegarTodasRespostas(numeroSorteado, caracteristicasBiomas2, respostaSorteada);

            vetorTotalRespostasErradas.push(...erradas);

            caracteristicasBiomas2.splice(numeroSorteado, 1);

            varControl++;
        }
        caracteristicasBiomas2 = [atividadesEconomicas, usoDaAgua, animaisAmeaçados, periodoDeChuvas, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];
    }
    return {
        pergunta: vetorPerguntaseelecionada,
        resposta: vetorRespostasselecionada,
        erradas: vetorTotalRespostasErradas
    };
}

let respostasCorretas = []
let correspondente = selecionarPerguntasRespostas();
let vetorCorretas = correspondente.resposta;
let vetorPerguntasCorretas = correspondente.pergunta;
let vetorErradas = correspondente.erradas;
let vetorCorretasInicias = [...vetorCorretas]; //fez uma copia do corretas para que a correta sorteada esteja nele

function sortearAlternativas() {
    let sorteioResposta = Math.floor(Math.random() * vetorCorretas.length);
    let respostaCorreta = vetorCorretas[sorteioResposta];
    vetorCorretas.splice(sorteioResposta, 1)[0];
    
    let perguntaCorreta = vetorPerguntasCorretas[sorteioResposta];
    vetorPerguntasCorretas.splice(sorteioResposta, 1)[0];

    let primeiraErrada;
    let segundaErrada;
    let terceiraErrada;

    if (sorteioResposta == 0) {
        primeiraErrada = vetorErradas[0];
        segundaErrada = vetorErradas[1];
        terceiraErrada = vetorErradas[2];
        vetorErradas.splice(sorteioResposta,3);
    } else {
        let aux = sorteioResposta * 3;
        primeiraErrada = vetorErradas[aux];
        segundaErrada = vetorErradas[aux + 1];
        terceiraErrada = vetorErradas[aux + 2];
        vetorErradas.splice(aux,3);
    }
    
    return {
        primeiraErrada,
        segundaErrada,
        terceiraErrada,
        respostaCorreta,
        perguntaCorreta
    };
    
}

console.log(vetorCorretas);

function escolherPergunta(array) {
    return Math.floor(Math.random() * array.length);
}

let respostaCorretaBotao = ''
let respostaIncorretasBt = []
let respCorreta = ''
function sortearPosicoes() {
    let alternativas = [];
    let pergunta = document.getElementById('question');
    let letraA = document.getElementById('letraA');
    let letraB = document.getElementById('letraB');
    let letraC = document.getElementById('letraC');
    let letraD = document.getElementById('letraD');

    let respostas = sortearAlternativas();

    let resp1 = respostas.primeiraErrada;
    let resp2 = respostas.segundaErrada;
    let resp3 = respostas.terceiraErrada;
    respCorreta = respostas.respostaCorreta;

    alternativas.push(resp1, resp2, resp3, respCorreta);
    console.log(respostas)

    pergunta.innerHTML = respostas.perguntaCorreta;

    let respPosicao1 = escolherPergunta(alternativas);
    letraA.value = alternativas[respPosicao1];
    alternativas.splice(respPosicao1, 1);

    let respPosicao2 = escolherPergunta(alternativas);
    letraB.value = alternativas[respPosicao2];
    alternativas.splice(respPosicao2, 1);

    let respPosicao3 = escolherPergunta(alternativas);
    letraC.value = alternativas[respPosicao3];
    alternativas.splice(respPosicao3, 1);

    let respPosicao4 = escolherPergunta(alternativas);
    letraD.value = alternativas[respPosicao4];
    if (letraA.value === respCorreta) {
        respostaCorretaBotao = letraA;
        respostaIncorretasBt = [letraC, letraB, letraD]
    }
    else if (letraB.value === respCorreta) {
        respostaCorretaBotao = letraB;
        respostaIncorretasBt = [letraA, letraC, letraD]
    }
    else if (letraC.value === respCorreta) {
        respostaCorretaBotao = letraC;
        respostaIncorretasBt = [letraA, letraB, letraD]
    }

    else if (letraD.value === respCorreta) {
        respostaCorretaBotao = letraD;
        respostaIncorretasBt = [letraA, letraB, letraC]
    }
    let respostaCorreta = respostas.respostaCorreta;  
    respostasCorretas.push(respostaCorreta);  
}
let biomasPerguntas = [0, 0, 0, 0, 0, 0];
let controleQuestoes = 0;

// Supondo que você tenha um evento de clique ou inicialização
document.addEventListener("DOMContentLoaded", function() {
    sortearPosicoes();
});

function mudarCoresIncorretasVermelho() {
    for (let i = 0; i < respostaIncorretasBt.length; i++) {
        if (respostaIncorretasBt[i]) {
            respostaIncorretasBt[i].style.backgroundColor = '#e8876c';
            respostaCorretaBotao.style.backgroundColor = '#7fd76f';
        }
    }
}
function mudarCoresNormal() {
    botaoA.style.backgroundColor = '';
    botaoB.style.backgroundColor = '';
    botaoC.style.backgroundColor = '';
    botaoD.style.backgroundColor = '';
}

let botaoB = document.getElementById('letraB');
let botaoA = document.getElementById('letraA');
let botaoC = document.getElementById('letraC');
let botaoD = document.getElementById('letraD');

document.getElementById('letraA').addEventListener('click', function () {
    console.log('correta' + respostaCorretaBotao.id)
    const vetorComparar = respostasCorretas;
    let questaoA = document.getElementById('letraA').value;
    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirA = conferir(questaoA);
        if (varConferirA === true) {
            console.log(vetorCorretasInicias)
            botaoA.style.backgroundColor = '#7fd76f';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoA);
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        }
        setTimeout(() => {
            sortearPosicoes();
        }, 1500);
    }
    controleQuestoes++;
    if (controleQuestoes === 12) {
        console.log(biomasPerguntas);
        fimQuiz(biomasPerguntas)
    }
});

document.getElementById('letraB').addEventListener('click', function () {
    const vetorComparar = respostasCorretas
    let questaoB = document.getElementById('letraB').value;
    console.log('correta' + respostaCorretaBotao.id)

    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirB = conferir(questaoB);
        if (varConferirB === true) {
            botaoB.style.backgroundColor = '#7fd76f';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoB);
            setTimeout(() => {
                mudarCoresNormal()
                botaoB.style.backgroundColor = '#c6d798"';
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
        
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        }
        setTimeout(() => {
            sortearPosicoes();
        }, 1500);
    }
    controleQuestoes++;
    if (controleQuestoes === 12) {
        console.log(biomasPerguntas);
        fimQuiz(biomasPerguntas)
    }
});

document.getElementById('letraC').addEventListener('click', function () {
    const vetorComparar = respostasCorretas
    console.log('correta' + respostaCorretaBotao.id)
    let questaoC = document.getElementById('letraC').value;
    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirC = conferir(questaoC);
        if (varConferirC === true) {
            botaoC.style.backgroundColor = '#7fd76f';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoC);
            setTimeout(() => {
                mudarCoresNormal()
                botaoC.style.backgroundColor = '#c6d798"';
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        }
        setTimeout(() => {
            sortearPosicoes();
        }, 1500);
    }
    controleQuestoes++;
    if (controleQuestoes === 12) {
        console.log(biomasPerguntas);
        fimQuiz(biomasPerguntas)
    }
});

document.getElementById('letraD').addEventListener('click', function () {
    const vetorComparar = respostasCorretas
    console.log('correta' + respostaCorretaBotao.id)
    let questaoD = document.getElementById('letraD').value;
    if (controleQuestoes < 12) {
        let varConferirD = conferir(questaoD);
        if (varConferirD === true) {
            botaoD.style.backgroundColor = '#7fd76f';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoD);
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        }
        setTimeout(() => {
            sortearPosicoes();
        }, 1500);
    }
    controleQuestoes++;
    if (controleQuestoes === 12) {
        fimQuiz(biomasPerguntas)
    }
});
function fimQuiz(vetor) {
    mudarCoresIncorretasVermelho()
   
    setTimeout(() => {
        paginaPergu.style.display = 'none';
        paginaFinal.style.display = 'flex';
    }, 1500)
    let paginaPergu = document.getElementById('quiz')
    let paginaFinal = document.getElementById('pontuacaoFinal')
    let pontuacaoFinalPampas = document.getElementById('pampaAcertos');
    let pontuacaoFinalCaatinga = document.getElementById('caatingaAcertos');
    let pontuacaoFinalCerrado = document.getElementById('cerradoAcertos');
    let pontuacaoFinalAmazonia = document.getElementById('amazoniaAcertos');
    let pontuacaoFinalPantanal = document.getElementById('pantanalAcertos');
    let pontuacaoFinaMataAtlan = document.getElementById('mataAcertos');

    let pontosPampas = vetor[0];
    let pontosCaatinga = vetor[1];
    let pontosPantanal = vetor[2];
    let pontosMataAtlan = vetor[3];
    let pontosCerrado = vetor[4];
    let pontosFlorestaAmazonia = vetor[5];

    pontuacaoFinaMataAtlan.innerText = "Acertos: " + pontosMataAtlan + "/2";
    pontuacaoFinalPampas.innerText = "Acertos: " + pontosPampas + "/2";
    pontuacaoFinalCaatinga.innerText = "Acertos: " + pontosCaatinga + "/2";
    pontuacaoFinalCerrado.innerText = "Acertos: " + pontosCerrado + "/2";
    pontuacaoFinalAmazonia.innerText = "Acertos: " + pontosFlorestaAmazonia + "/2";
    pontuacaoFinalPantanal.innerText = "Acertos: " + pontosPantanal + "/2";
}

// Função para contar perguntas por bioma
function biomaReferente(resp) {  
    let numPosicao = vetorCorretasInicias.indexOf(resp);  
    if (numPosicao === -1) return;  
    if (numPosicao < 2) {  
       biomasPerguntas[0]++;  
    } else if (numPosicao < 4) {  
       biomasPerguntas[1]++;  
    } else if (numPosicao < 6) {  
       biomasPerguntas[2]++;  
    } else if (numPosicao < 8) {  
       biomasPerguntas[3]++;  
    } else if (numPosicao < 10) {  
       biomasPerguntas[4]++;  
    } else if (numPosicao < 12) {  
       biomasPerguntas[5]++;  
    }  
    console.log('controle de acertos: ' + biomasPerguntas)  
 }

// Função para conferir resposta
function conferir(resposta) {
    return resposta === respCorreta
}