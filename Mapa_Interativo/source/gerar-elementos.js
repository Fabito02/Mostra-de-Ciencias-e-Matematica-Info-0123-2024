document.addEventListener('DOMContentLoaded', () => {
    const estados = document.querySelectorAll('.estado');
    const elementoFlutuante = document.getElementById('elementoFlutuante');
    const key = '00d597d79abf4aaebac53307242208';
    const lang = 'pt';

    let estadosData = {};

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

    // carregar os dados dos estados
    carregarEstados().then(() => {
        estados.forEach(estado => {
            estado.addEventListener('mouseenter', () => {
                const code = estado.getAttribute('code');
                const estadoData = estadosData[code];

                if (estadoData) {

                    // informações climáticas
                    city = estadoData.city
                    
                    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`;
                    if (city) {
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                const iconUrl = data.current.condition.icon;
                                const clima = `<img src="${iconUrl}" alt="Ícone do clima atual" class="iconClima icon"> <marquee scrollamount="5" class="textoElementoFlutuante textoClima">${data.current.temp_c}°C, ${data.current.condition.text} - ${city}</marquee>`;
                                elementoFlutuante.querySelector('#clima').innerHTML = clima;
                            })
                            .catch(error => {
                                console.error('Erro:', error);
                                elementoFlutuante.querySelector('#clima').innerHTML = '<p style="color: red">erro ao obter clima, falar com quem fez isso</p>';
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

                    // Mostrar o elemento flutuante
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