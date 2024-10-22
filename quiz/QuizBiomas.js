
let pampas = {
    'Qual é a principal atividade econômica no Pampa que reduz as áreas de vegetação nativa?': 'Expansão das monoculturas',
    'Qual é a principal característica do solo nos Pampas?': 'Solo fértil com textura argilosa',
    'Qual é o principal animal ameaçado nos Pampas?': 'Tamanduá',
    'Qual é a adaptação das plantas dos Pampas?': 'Capacidade de crescimento rápido após pastagens',
    'Qual é um dos animais mais presentes no Pampas?': 'João-de-Barro',
    'Qual bioma é conhecido por abrigar o Aquífero Guarani, um dos maiores reservatórios de água doce subterrânea do mundo?': 'Pampas',
    'Qual bioma ocupa cerca de 63% do território do estado do Rio Grande do Sul e é caracterizado por campos nativos, coxilhas, matas ciliares e formações arbustivas?': 'Pampas',
    'Quais são os principais impactos ambientais nas Pampas devido à ampliação das monoculturas?': 'Perda de biodiversidade e erosão do solo',
};

let caatinga = {
    'Qual é a principal atividade econômica na Caatinga?': 'Agricultura e pecuária',
    'Qual é a característica do solo da Caatinga?': 'Solo pobre em nutrientes e seco',
    'Qual é um animal ameaçado de extinção na Caatinga?': 'Tatu-bola',
    'Qual é a principal adaptação das plantas da Caatinga?': 'Folhas pequenas e resistentes à seca',
    'Qual bioma possui uma vegetação adaptada para sobreviver em condições extremas de seca, com plantas que realizam fotossíntese pelo caule?': 'Caatinga',
    'Qual bioma brasileiro é caracterizado por um clima semiárido, vegetação adaptada à seca e abrange principalmente o nordeste do Brasil?': 'Caatinga',
    'Qual é um mamífero comum da Caatinga?': 'Onça-parda',
    'Qual é o impacto das secas prolongadas na Caatinga?': 'Extinção de espécies e escassez de água',
};

let pantanal = {//
    'Qual é a principal atividade econômica no Pantanal?': 'Pecuária',
    'Qual é a característica do solo do Pantanal?': 'Solo alagadiço e rico em matéria orgânica',
    'Qual é o impacto da expansão do cultivo da soja no Pantanal?': 'Devido ao grande uso de ao agrotóxicos, pode prejudicar o ecossistema.',
    'Qual bioma brasileiro se estende por partes do Paraguai e da Bolívia e é caracterizado por sua grande planície alagada?': 'Pantanal',
    'Qual é um animal típico do Pantanal?': 'Capivara',
    'Qual bioma ocupa cerca de 2% do território nacional e é caracterizado por sua grande planície que fica alagada em boa parte do ano?': 'Pantanal',
    'Qual é um dos principais animais ameaçados de extinção no Pantanal?': 'Arara-azul',
    'Como as plantas do Pantanal lidam com as cheias?': 'Possuem raízes flutuantes',
};


let mataAtlantica = {
    'Qual é a principal atividade econômica na Mata Atlântica?': 'Exploração dos recursos naturais e produção agrícola',
    'Qual é a característica do solo da Mata Atlântica?': 'Solo fértil e úmido',
    'Qual é um dos principais animais ameaçados na Mata Atlântica?': 'Mico-leão-dourado',
    'Como as plantas da Mata Atlântica se adaptam à umidade?': 'Folhas largas para captar luz e água',
    'Qual estação do ano é considerada a melhor para observar a biodiversidade na Mata Atlântica?':'Primavera',
    'Qual é um mamífero característico da Mata Atlântica?': 'Tamanduá-bandeira',
    'Quais são os princpais impactos ambientais causado pela urbanização nas áreas costeiras da Mata Atlântica?': 'Fragmentação do habitat e erosão costeira',
    'Qual bioma brasileiro é lar do mico-leão-dourado e do pau-brasil, mas hoje tem apenas 12% de sua área original?': 'Mata Atlântica',
};

let cerrado = {
    'Qual principal motivo da atual devastação no cerrado?': 'Expansão agrícola',
    'Qual é a característica do solo do Cerrado?': 'Solo ácido e pobre em nutrientes',
    'Qual é uma ave comum no Cerrado?': 'Gavião-pega-montanha',
    'Como as plantas do Cerrado se adaptam ao fogo?': 'Possuem cascas grossas e resiliência',
    'Qual bioma é considerado a savana mais rica do planeta, abrigando 5% de toda biodiversidade do mundo?': 'Cerrado',
    'Qual é um dos principais animais ameaçados no Cerrado?': 'Lobo-guará',
    'Qual bioma cobre 25% do território brasileiro, sendo a savana mais rica do planeta?': 'Cerrado',
    'Qual é o impacto da expansão agrícola no Cerrado?': 'Desmatamento e perda de solo fértil',
};

let florestaAmazonica = {
    'Qual é uma das principais atividades econômicas da Floresta Amazônica?': 'Exploração de recursos florestais',
    'Qual é a característica do solo da Floresta Amazônica?': 'Solo raso e pobre em nutrientes',
    'Qual é o principal mamífero ameaçado na Floresta Amazônica?': 'Onça-pintada',
    'Qual é a adaptação das árvores da Floresta Amazônica?': 'Folhagem densa para captar luz solar',
    'Qual bioma é crucial para a regulação do clima global e atua como um grande “resfriador” atmosférico?': 'Floresta Amazônica',
    'Qual é uma ave típica da Floresta Amazônica?': 'Tucano',
    'Qual é o impacto das queimadas na Amazônia?': 'Redução da biodiversidade e aumento das emissões de CO2',
    'Qual bioma é considerado o de maior biodiversidade do planeta e ocupa cerca de 47% do território brasileiro?': 'Amazônia',
};


// Objeto sobre atividades econômicas
let atividadesEconomicas = {
    'Qual é a principal atividade econômica no Pampa que reduz as áreas de vegetação nativa?': 'Expansão das monoculturas',
    'Qual é a principal atividade econômica na Caatinga?': 'Agricultura e pecuária',
    'Qual é a principal atividade econômica no Pantanal?': 'Pecuária',
    'Qual é a principal atividade econômica na Mata Atlântica?': 'Exploração dos recursos naturais e produção agrícola',
    'Qual principal motivo da atual devastação no cerrado?': 'Expansão agrícola',
    'Qual é uma das principais atividades econômicas da Floresta Amazônica?': 'Exploração de recursos florestais',
};

// Objeto caracteristicas dos biomas
let respostaBiomas = {
    'Qual bioma ocupa cerca de 63% do território do estado do Rio Grande do Sul e é caracterizado por campos nativos, coxilhas, matas ciliares e formações arbustivas?': 'Pampas',
    'Qual bioma brasileiro é caracterizado por um clima semiárido, vegetação adaptada à seca e abrange principalmente o nordeste do Brasil?': 'Caatinga',
    'Qual bioma ocupa cerca de 2% do território nacional e é caracterizado por sua grande planície que fica alagada em boa parte do ano?': 'Pantanal',
    'Qual bioma brasileiro é lar do mico-leão-dourado e do pau-brasil, mas hoje tem apenas 12% de sua área original?': 'Mata Atlântica',
    'Qual bioma cobre 25% do território brasileiro, sendo a savana mais rica do planeta?': 'Cerrado',
    'Qual bioma é considerado o de maior biodiversidade do planeta e ocupa cerca de 47% do território brasileiro?': 'Amazônia',
};

// Objeto sobre animais ameaçados nos biomas
let animaisAmeaçados = {
    'Qual é o principal animal ameaçado nos Pampas?': 'Tamanduá',
    'Qual é um animal ameaçado de extinção na Caatinga?': 'Tatu-bola',
    'Qual é um dos principais animais ameaçados de extinção no Pantanal?': 'Arara-azul',
    'Qual é um dos principais animais ameaçados na Mata Atlântica?': 'Mico-leão-dourado',
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

// Objeto sobre aves e fauna dos biomas
let avesEFauna = {
    'Qual é um dos animais mais presentes no Pampas?': 'João-de-Barro',
    'Qual é um mamífero comum da Caatinga?': 'Onça-parda',
    'Qual é um animal típico do Pantanal?': 'Capivara',
    'Qual é um mamífero característico da Mata Atlântica?': 'Tamanduá-bandeira',
    'Qual é uma ave comum no Cerrado?': 'Gavião-pega-montanha',
    'Qual é uma ave típica da Floresta Amazônica?': 'Tucano',
};

// Objeto sobre impacto ambiental
let impactoAmbiental = {
    'Quais são os principais impactos ambientais nas Pampas devido à ampliação das monoculturas?': 'Perda de biodiversidade e erosão do solo',
    'Qual é o impacto das secas prolongadas na Caatinga?': 'Extinção de espécies e escassez de água',
    'Qual é o impacto da expansão do cultivo da soja no Pantanal?': 'Devido ao grande uso de ao agrotóxicos, pode prejudicar o ecossistema.',
    'Quais são os princpais impactos ambientais causado pela urbanização nas áreas costeiras da Mata Atlântica?': 'Fragmentação do habitat e erosão costeira',
    'Qual é o impacto da expansão agrícola no Cerrado?': 'Desmatamento e perda de solo fértil',
    'Qual é o impacto das queimadas na Amazônia?': 'Redução da biodiversidade e aumento das emissões de CO2',
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

// Objeto sobre curiosidades dos biomas
let curiosidades = {
    'Qual bioma é conhecido por abrigar o Aquífero Guarani, um dos maiores reservatórios de água doce subterrânea do mundo?': 'Pampas',
    'Qual bioma possui uma vegetação adaptada para sobreviver em condições extremas de seca, com plantas que realizam fotossíntese pelo caule?': 'Caatinga',
    'Qual bioma brasileiro se estende por partes do Paraguai e da Bolívia e é caracterizado por sua grande planície alagada?': 'Pantanal',
    'Qual bioma se estende por uma área que já foi de 1,3 milhões km², mas agora tem apenas 12% de sua extensão original devido à ação humana?': 'Mata Atlântica',
    'Qual bioma é considerado a savana mais rica do planeta, abrigando 5% de toda biodiversidade do mundo?': 'Cerrado',
    'Qual bioma é crucial para a regulação do clima global e atua como um grande “resfriador” atmosférico?': 'Floresta Amazônica',
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
    respostaBiomas,
    animaisAmeaçados,
    adaptacaoPlantas,
    avesEFauna,
    impactoAmbiental,
    caracteristicasDoSolo,
    curiosidades,
};


// Lista de biomas
let biomas = [pampas, caatinga, pantanal, mataAtlantica, cerrado, florestaAmazonica];

let caracteristicasBiomas = [atividadesEconomicas, respostaBiomas, animaisAmeaçados, curiosidades, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];

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
    let caracteristicasBiomas2 = [atividadesEconomicas, respostaBiomas, animaisAmeaçados, curiosidades, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];
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
        caracteristicasBiomas2 = [atividadesEconomicas, respostaBiomas, animaisAmeaçados, curiosidades, caracteristicasDoSolo, impactoAmbiental, avesEFauna, adaptacaoPlantas];
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