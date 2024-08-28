// Função para aplicar lazy loading em uma imagem
function applyLazyLoading(img) {
    if (!img.dataset.src) return;
    img.src = img.dataset.src;
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
function espandirChat(e) {
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