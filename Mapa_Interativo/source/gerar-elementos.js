const estados = document.querySelectorAll('.estado');
const key = '00d597d79abf4aaebac53307242208';
const lang = 'pt';
var estadosData = {};

// carrega os dados do JSON
function carregarEstados() {
    return fetch('source/dados-estados.json')
        .then(response => response.json())
        .then(dados => {
            estadosData = dados;
        })
        .catch(error => {
            console.error('Erro ao carregar estados:', error);
        });
}

const tempoAtualizacao = 5 * 60 * 1000; // 5 minutos
const cacheClima = {};

// Pequeno script para criar um cache para os climas e diminuir as chamadas na API

function getClima(city) {
    console.log()
    const agora = new Date().getTime();
    if (cacheClima[city] && (agora - cacheClima[city].timestamp < tempoAtualizacao)) {
        return Promise.resolve(cacheClima[city].data);  // Retorna uma Promise resolvida com os dados em cache
    } else {
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`;
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                cacheClima[city] = {
                    data: data,
                    timestamp: agora
                };
                console.log(`Cache do clima da cidade "${city}" atualizado`)
                return data;
            })
            .catch(error => {
                console.error('Erro:', error);
                throw error;
            });
    }
}

carregarEstados()

document.addEventListener('DOMContentLoaded', () => {
    let elementoFlutuante = document.getElementById('elementoFlutuante');

    // carregar os dados dos estados
    carregarEstados().then(() => {
        estados.forEach(estado => {
            estado.addEventListener('mouseenter', () => {
                let code = estado.getAttribute('code');
                let estadoData = estadosData[code];

                if (estadoData) {
                    let city = estadoData.city;
                    
                    if (city) {
                        getClima(city).then(data => {
                            const iconUrl = data.current.condition.icon;
                            const clima = `<img src="${iconUrl}" alt="Ícone do clima atual" class="iconClima icon"> <marquee scrollamount="5" class="textoElementoFlutuante textoClima">${data.current.temp_c}°C, ${data.current.condition.text} - ${city}</marquee>`;
                            elementoFlutuante.querySelector('#clima').innerHTML = clima;
                        }).catch(error => {
                            console.error('Erro:', error);
                            elementoFlutuante.querySelector('#clima').innerHTML = '<p style="color: red">erro ao obter o clima!</p>';
                        });
                    } else {
                        elementoFlutuante.querySelector('#clima').innerHTML = '';
                    }

                    // outros dados do estado
                    elementoFlutuante.querySelector('#img').src = estadoData.img;
                    elementoFlutuante.querySelector('#nomeEstado').innerHTML = estadoData.nomeEstado;
                    elementoFlutuante.querySelector('#territorio').innerHTML = estadoData.extensaoTerritorial;
                    elementoFlutuante.querySelector('#habitantes').innerHTML = estadoData.habitantes;
                    elementoFlutuante.querySelector('#biomas').innerHTML = estadoData.biomas;
                    elementoFlutuante.querySelector('#fontesEnergeticas').innerHTML = estadoData.fontesEnergeticas;

                    // mostrar o elemento flutuante que segue o mouse
                    elementoFlutuante.classList.add('show');
                }
            });

            estado.addEventListener('mouseleave', () => {
                elementoFlutuante.classList.remove('show');
            });
        });

        // atualizar a posição do elemento flutuante de acordo com o movimento do mouse
        document.addEventListener('mousemove', (e) => {
            if (elementoFlutuante.classList.contains('show')) {
                elementoFlutuante.style.left = `${e.pageX + 20}px`;
                elementoFlutuante.style.top = `${e.pageY + 10}px`;
            }
        });
    });
});

function abrirCaixasFlutuantes() {
    let informacoesBase = document.querySelector('.conteudoInformacoesBase');

    // Exibir caixas flutuantes e botão de fechar
    document.querySelectorAll('#caixaFlutuante').forEach(caixa => {
        caixa.classList.remove('hide');
    });
    document.querySelector('.fecharCaixasFlutuantes').classList.remove('hide');

    // carregar os dados dos estados
    document.querySelectorAll('.estado').forEach(estado => {
        estado.addEventListener('click', () => {
            let code = estado.getAttribute('code');
            let estadoData = estadosData[code];

            if (estadoData) {
                let city = estadoData.city;

                if (city) {
                    getClima(city).then(data => {
                        const iconUrl = data.current.condition.icon;
                        const clima = `<img src="${iconUrl}" alt="Ícone do clima atual" class="iconClima icon"> <marquee scrollamount="5" class="textoElementoFlutuante textoClima">${data.current.temp_c}°C, ${data.current.condition.text} - ${city}</marquee>`;
                        informacoesBase.querySelector('#clima').innerHTML = clima;
                    }).catch(error => {
                        console.error('Erro:', error);
                        informacoesBase.querySelector('#clima').innerHTML = '<p style="color: red">erro ao obter o clima!</p>';
                    });
                } else {
                    informacoesBase.querySelector('#clima').innerHTML = '';
                }

                // outros dados do estado
                informacoesBase.querySelector('#territorio').innerHTML = estadoData.extensaoTerritorial;
                informacoesBase.querySelector('#habitantes').innerHTML = estadoData.habitantes;
                informacoesBase.querySelector('#biomas').innerHTML = estadoData.biomas;
                informacoesBase.querySelector('#fontesEnergeticas').innerHTML = estadoData.fontesEnergeticas;

                let topicos = document.querySelector('.topicos');
                topicos.querySelector('.biomasTopico').innerHTML = estadoData.biomasTopico;
                topicos.querySelector('.fontesEnergeticasTopico').innerHTML = estadoData.fontesEnergeticasTopico;
                topicos.querySelector('.reservasBiologicasTopico').innerHTML = estadoData.reservasBiologicasTopico;
                topicos.querySelector('.reservasHidricasTopico').innerHTML = estadoData.reservasHidricasTopico;
                topicos.querySelector('.cultura').innerHTML = estadoData.cultura;
                topicos.querySelector('.historia').innerHTML = estadoData.historia;
                topicos.querySelector('.questoesGeograficas').innerHTML = estadoData.questoesGeograficas;
                topicos.querySelector('.impactosAmbientais').innerHTML = estadoData.impactosAmbientais;
            }
            abrirBarraLateral()
        });
    });
}

// tava com um bug e essa gambiarra resolveu
function fecharCaixas() {
    document.querySelector('.fecharCaixasFlutuantes').classList.add('hide');
    document.querySelectorAll('#caixaFlutuante').forEach(caixa => {
        caixa.classList.add('hide');
    });
}

abrirCaixasFlutuantes()
fecharCaixas()
