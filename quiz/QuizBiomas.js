let pampas = {
    'Qual é o bioma que cobre o sul do Brasil, Uruguai e partes da Argentina?': 'Pampas',
    'Qual é a principal vegetação encontrada nos Pampas?': 'Vegetação Campestre',
    'Qual é a característica climática dos Pampas?': 'Temperado',
    'Qual é o principal animal de pastagem encontrado nos Pampas?': 'Gado',
    'Qual é a estação chuvosa nos Pampas?': 'Primavera e verão',
    'Qual é o clima predominante no bioma Pampas?': 'Temperado',
    'Qual é a principal vegetação do Pampas?': 'Vegetação Campestre',
    'Em que estação os Pampas experimentam a maior quantidade de chuva?': 'Primavera e verão',
    'Qual é o principal uso da terra nos Pampas?': 'Pecuária',
    'Qual é a principal característica do solo nos Pampas?': 'Solo fértil',
};

let caatinga = {
    'Qual é o bioma exclusivo do Brasil que é conhecido por sua vegetação xerófila?': 'Caatinga',
    'Qual é a principal árvore da Caatinga que se adapta à seca?': 'Juazeiro',
    'Qual é o tipo de clima predominante na Caatinga?': 'Semiárido',
    'Qual é a estação chuvosa na Caatinga?': 'Verão',
    'Qual é o principal animal de grande porte encontrado na Caatinga?': 'Onça-Parda',
    'Qual é o principal tipo de vegetação encontrada na Caatinga?': 'Xerófila',
    'Qual é a característica principal das chuvas na Caatinga?': 'Irregulares e concentradas no verão',
    'Qual é um dos principais arbustos da Caatinga?': 'Mandacaru',
    'Qual animal é frequentemente encontrado na Caatinga e está ameaçado de extinção?': 'Tatu-bola',
    'Qual é o impacto das secas prolongadas na Caatinga?': 'Redução da vegetação e escassez de água',
};

let pantanal = {
    'Qual é o bioma que é o maior planalto alagável do mundo?': 'Pantanal',
    'Qual é o principal rio que atravessa o Pantanal?': 'Rio Paraguai',
    'Qual é a característica climática do Pantanal?': 'Tropical',
    'Qual é o principal ecossistema do Pantanal?': 'Área alagada',
    'Quantas espécies de aves podem ser encontradas no Pantanal?': 'Mais de 650',
    'Qual é a principal característica da flora do Pantanal?': 'Vegetação alagada e áreas inundáveis',
    'Qual é o maior predador do Pantanal?': 'Onça-pintada',
    'Qual é um dos principais recursos naturais do Pantanal?': 'Recursos pesqueiros',
    'Durante qual estação o Pantanal experimenta mais enchentes?': 'Estação chuvosa (verão)',
    'Qual é uma das principais atividades econômicas no Pantanal?': 'Pecuária de gado',
};

let mataAtlantica = {
    'Qual é o bioma que cobre a faixa litorânea do Brasil, do Nordeste ao Sul?': 'Mata Atlântica',
    'Qual é a árvore símbolo da Mata Atlântica?': 'Pau-brasil',
    'Qual é a principal característica do clima da Mata Atlântica?': 'Tropical úmido',
    'Quantas espécies de fauna foram identificadas na Mata Atlântica?': 'Mais de 1.000',
    'Qual é a principal ameaça à Mata Atlântica?': 'Desmatamento',
    'Qual é o principal tipo de vegetação da Mata Atlântica?': 'Floresta tropical úmida',
    'Qual é uma das principais ameaças à biodiversidade da Mata Atlântica?': 'Desmatamento e urbanização',
    'Qual é um dos animais endêmicos da Mata Atlântica?': 'Muriqui (ou mono-barrigudo)',
    'Qual é o impacto do turismo na Mata Atlântica?': 'Pode causar degradação ambiental se não for sustentável',
    'Qual é o papel da Mata Atlântica no ciclo da água?': 'Regulação do ciclo hídrico e manutenção da umidade',
};

let cerrado = {
    'Qual é o bioma conhecido como a savana brasileira?': 'Cerrado',
    'Qual é a principal vegetação do Cerrado?': 'Cerrado sensu lato',
    'Qual é a estação seca mais pronunciada no Cerrado?': 'Inverno',
    'Qual é a principal planta do Cerrado que se adapta bem ao fogo?': 'Candeia',
    'Quantas espécies de plantas nativas o Cerrado abriga, aproximadamente?': '10.000',
    'Qual é o período de maior intensidade de queimadas no Cerrado?': 'Período seco (inverno)',
    'Qual é uma das principais adaptações das plantas do Cerrado ao fogo?': 'Resiliência e regeneração rápida',
    'Qual é um dos principais grupos de animais encontrados no Cerrado?': 'Mamíferos como o lobo-guará',
    'Qual é a característica do solo do Cerrado?': 'Solo ácido e pobre em nutrientes',
    'Qual é a principal fonte de água no Cerrado?': 'Aquíferos subterrâneos',
};

let florestaAmazonica = {
    'Qual é o maior bioma do Brasil?': 'Floresta Amazônica',
    'Qual é o principal rio que corta a Floresta Amazônica?': 'Rio Amazonas',
    'Qual é a principal árvore encontrada na Floresta Amazônica?': 'Angelim-vermelho',
    'Qual é a característica climática predominante na Floresta Amazônica?': 'Equatorial',
    'Quantas espécies de árvores existem, aproximadamente, na Floresta Amazônica?': 'Mais de 16.000',
    'Qual é o principal fator que contribui para a alta biodiversidade da Floresta Amazônica?': 'Clima quente e úmido',
    'Qual é a principal vegetação encontrada na Floresta Amazônica?': 'Floresta tropical densa',
    'Qual é o impacto da desflorestação na Floresta Amazônica?': 'Perda de biodiversidade e alterações climáticas',
    'Qual é o nome do fenômeno de redução da umidade na Floresta Amazônica devido à destruição da vegetação?': 'Desertificação',
    'Qual é o papel das árvores na Floresta Amazônica para a atmosfera?': 'Absorvem dióxido de carbono e liberam oxigênio',
};

// Lista de biomas
let biomas = [pampas, caatinga, pantanal, mataAtlantica, cerrado, florestaAmazonica];

// Função para coletar todas as respostas
function pegarTodasRespostas() {
    let vetorTotalRespostas = [];
    for (let i = 0; i < biomas.length; i++) {
        let respostas = Object.values(biomas[i]);
        vetorTotalRespostas.push(...respostas);
    }
    return vetorTotalRespostas;
}

// Função para sortear perguntas e respostas
function teste() {
    let vetorRespostasselecionadaTeste = [];
    let vetorPerguntaseelecionadaTeste = [];
    for (let i = 0; i < biomas.length; i++) {
        let varControl = 0;
        let vetorPerguntas = Object.keys(biomas[i]);
        let vetorRespostas = Object.values(biomas[i]);

        while (varControl < 2) {
            let numeroSorteado = Math.floor(Math.random() * vetorPerguntas.length);
            let perguntaSorteada = vetorPerguntas[numeroSorteado];
            let respostaSorteada = vetorRespostas[numeroSorteado];
            
            vetorPerguntaseelecionadaTeste.push(perguntaSorteada);
            vetorRespostasselecionadaTeste.push(respostaSorteada);
            
            vetorPerguntas.splice(numeroSorteado, 1);
            vetorRespostas.splice(numeroSorteado, 1);
            
            varControl++;
        }
    }
    return {
        pergunta: vetorPerguntaseelecionadaTeste,
        resposta: vetorRespostasselecionadaTeste
    };
}

// Função para encontrar respostas erradas
function encontrarRespostasErradas(vetorTotalRespostas, vetorRespostasselecionada) {
    let vetorAltErradas = [];
    for (let resposta of vetorTotalRespostas) {
        if (!vetorRespostasselecionada.includes(resposta)) {
            vetorAltErradas.push(resposta);
        }
    }
    return vetorAltErradas;
}

let correspondente = teste();
let vetorTotalRespostas = pegarTodasRespostas();    
let vetorCorretas = correspondente.resposta;
let vetorPerguntasCorretas = correspondente.pergunta;
let vetorErradas = encontrarRespostasErradas(vetorTotalRespostas, vetorCorretas);
let vetorCorretasInicias= [...vetorCorretas]; //fez uma copia do corretas para que a correta sorteada esteja nele

function sortearAlternativas() {
    if (vetorErradas.length < 3 || vetorCorretas.length === 0) {
        console.error('Não há respostas suficientes para sortear.');
        return {};
    }
    let sorteio1 = Math.floor(Math.random() * vetorErradas.length);
    let primeiraErrada = vetorErradas.splice(sorteio1, 1)[0];

    let sorteio2 = Math.floor(Math.random() * vetorErradas.length);
    let segundaErrada = vetorErradas.splice(sorteio2, 1)[0];

    let sorteio3 = Math.floor(Math.random() * vetorErradas.length);
    let terceiraErrada = vetorErradas.splice(sorteio3, 1)[0];

    let sorteioResposta = Math.floor(Math.random() * vetorCorretas.length);
    let respostaCorreta = vetorCorretas.splice(sorteioResposta, 1)[0];

    let perguntaCorreta = vetorPerguntasCorretas.splice(sorteioResposta, 1)[0];

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
    let respCorreta = respostas.respostaCorreta;

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
    if (letraA.value === respCorreta){
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

    else if (letraD.value === respCorreta){ 
        respostaCorretaBotao = letraD;
        respostaIncorretasBt = [letraA, letraB, letraC]
}}


let biomasPerguntas = [0, 0, 0, 0, 0, 0];
let controleQuestoes = 0;

sortearPosicoes();
function mudarCoresIncorretasVermelho(){
    for(let i = 0; i < respostaIncorretasBt.length; i++){
        if (respostaIncorretasBt[i]) {
            respostaIncorretasBt[i].style.backgroundColor = 'red';
        }
    }
}
function mudarCoresNormal(){
    botaoA.style.backgroundColor = '#cf7e3c73'
    botaoB.style.backgroundColor = '#cf7e3c73';
    botaoC.style.backgroundColor = '#cf7e3c73';
    botaoD.style.backgroundColor = '#cf7e3c73';
}

let botaoB = document.getElementById('letraB');
let botaoA = document.getElementById('letraA');
let botaoC = document.getElementById('letraC');
let botaoD = document.getElementById('letraD');

document.getElementById('letraA').addEventListener('click', function(){
    console.log('correta' + respostaCorretaBotao.id)
    const vetorComparar = vetorCorretasInicias;
    let questaoA = document.getElementById('letraA').value;
    console.log(vetorComparar)
  
    if (controleQuestoes < 12) {
        let varConferirA = conferir(questaoA, vetorComparar);
        if (varConferirA===true) {
            console.log(vetorCorretasInicias)
            botaoA.style.backgroundColor = 'green';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoA, vetorComparar);
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            respostaCorretaBotao.style.backgroundColor = 'green';
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

document.getElementById('letraB').addEventListener('click', function(){
    const vetorComparar = vetorCorretasInicias
    let questaoB = document.getElementById('letraB').value;
    
    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirB = conferir(questaoB, vetorComparar);
        if (varConferirB===true) {
            botaoB.style.backgroundColor = 'green';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoB, vetorComparar);
            setTimeout(() => {
                mudarCoresNormal()
                botaoB.style.backgroundColor = '#cf7e3c73';
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            respostaCorretaBotao.style.backgroundColor = 'green'
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

document.getElementById('letraC').addEventListener('click', function(){
    const vetorComparar = vetorCorretasInicias
    let questaoC = document.getElementById('letraC').value;
    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirC = conferir(questaoC, vetorComparar);
        if (varConferirC===true) {
            botaoC.style.backgroundColor = 'green';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoC, vetorComparar);
            setTimeout(() => {
                mudarCoresNormal()
                botaoC.style.backgroundColor = '#cf7e3c73';
            }, 1500);
        } else {
            mudarCoresIncorretasVermelho()
            respostaCorretaBotao.style.backgroundColor = 'green';
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
    const vetorComparar = vetorCorretasInicias
    let questaoD = document.getElementById('letraD').value;
    console.log(vetorComparar)
    if (controleQuestoes < 12) {
        let varConferirD = conferir(questaoD, vetorComparar);
        if (varConferirD===true) {
            botaoD.style.backgroundColor = 'green';
            mudarCoresIncorretasVermelho()
            biomaReferente(questaoD, vetorComparar);
            setTimeout(() => {
                mudarCoresNormal()
            }, 1500);
        } else {
        mudarCoresIncorretasVermelho()
            respostaCorretaBotao.style.backgroundColor = 'green'
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
function fimQuiz(vetor){
    mudarCoresIncorretasVermelho()
    respostaCorretaBotao.style.backgroundColor = 'green';
     setTimeout(() => {
    paginaPergu.style.display = 'none';
    paginaFinal.style.display = 'flex';
     }, 1500)
    let paginaPergu = document.getElementById('quiz')
    let paginaFinal = document.getElementById('pontuacaoFinal')
    let pontuacaoFinalPampas = document.getElementById ('pampaAcertos');
    let pontuacaoFinalCaatinga = document.getElementById ('caatingaAcertos');
    let pontuacaoFinalCerrado = document.getElementById ('cerradoAcertos');
    let pontuacaoFinalAmazonia = document.getElementById ('amazoniaAcertos');
    let pontuacaoFinalPantanal = document.getElementById ('pantanalAcertos');
    let pontuacaoFinaMataAtlan = document.getElementById ('mataAcertos');
    
    let pontosPampas = vetor[0];
    let pontosCaatinga = vetor[1];
    let pontosPantanal = vetor[2];
    let pontosMataAtlan = vetor[3];
    let pontosCerrado= vetor[4];
    let pontosFlorestaAmazonia = vetor[5];

    pontuacaoFinaMataAtlan.innerText= "Acertos: " + pontosMataAtlan + "/2";
    pontuacaoFinalPampas.innerText= "Acertos: " + pontosPampas + "/2";
    pontuacaoFinalCaatinga.innerText= "Acertos: " + pontosCaatinga + "/2";
    pontuacaoFinalCerrado.innerText= "Acertos: " + pontosCerrado + "/2";
    pontuacaoFinalAmazonia.innerText= "Acertos: " + pontosFlorestaAmazonia + "/2";
    pontuacaoFinalPantanal.innerText= "Acertos: " + pontosPantanal + "/2";
}

// Função para contar perguntas por bioma
function biomaReferente(resp, vetor) {
    let numPosicao = vetor.indexOf(resp);

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
function conferir(resposta, vetor) {
    return vetor.includes(resposta);
    
}