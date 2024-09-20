// Função para aplicar lazy loading em uma imagem com animação de carregamento
function applyLazyLoading(img) {
    if (!img.dataset.src) return;

    const loader = document.getElementById('loading');
    loader.style.display = 'block'; // Exibe o loader

    const tempImg = new Image();
    tempImg.src = img.dataset.src;

    tempImg.onload = function () {
        img.src = tempImg.src;
        img.style.opacity = 1; // Exibe a imagem
        loader.style.display = 'none'; // Oculta o loader
    };

    tempImg.onerror = function () {
        console.error('Erro ao carregar a imagem:', tempImg.src);
        loader.style.display = 'none'; // Oculta o loader em caso de erro
    };
}

// Aplica lazy loading em todas as imagens que já estão no DOM
document.querySelectorAll('img').forEach(applyLazyLoading);

// Observa o DOM para detectar novas imagens e aplica lazy loading nelas
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.tagName === 'IMG') {
                applyLazyLoading(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                node.querySelectorAll('img').forEach(applyLazyLoading);
            }
        });
    });
});

// Configura o MutationObserver para observar mudanças no DOM
observer.observe(document.body, { childList: true, subtree: true });

observer.observe(document.body, { childList: true, subtree: true });

// Dropdown (Mobile)
function dropdown() {
    menuHeader = document.getElementById("menuHeader")
    buttonMenu = document.getElementById('buttonMenu')
    if (menuHeader.classList.contains("show")) {
        buttonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        buttonMenu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>'
    }

    menuHeader.classList.toggle("show");
}

// ChatBot 
function expandirChat(e) {
    let chatbot = document.querySelector('.chatbot');
    if (chatbot.classList.contains('expandido')) {
        chatbot.classList.remove("expandido");
        e.innerHTML = '<i class="fa-solid fa-up-right-and-down-left-from-center"></i>';
    } else {
        chatbot.classList.add("expandido");
        e.innerHTML = '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>';
    }
}

function fecharChatBot() {
    let chatbot = document.querySelector('.chatbot');
    chatbot.classList.add("hide");
}

function abrirChatbot() {
    let chatbot = document.querySelector('.chatbot');
    if (chatbot.classList.contains('hide')) {
        chatbot.classList.remove("hide");
    } else {
        chatbot.classList.add("hide");
    }
}