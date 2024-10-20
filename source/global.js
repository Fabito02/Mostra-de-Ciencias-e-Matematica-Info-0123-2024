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

function voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function verificarScroll() {
  const button = document.getElementById('voltarTopo');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.transform = "";
  } else {
    button.style.transform = "translateY(180px)";
  }
}

verificarScroll()

window.onscroll = function() {
  verificarScroll();
};

function blurStatus() {
    if (localStorage.getItem("blurStatus") === 'true') {
        document.querySelectorAll('*').forEach(element => {
            element.style.backdropFilter = '';
        });
    } else {
        document.querySelectorAll('*').forEach(element => {
            element.style.backdropFilter = 'none';
        });
    }
}

window.onload = blurStatus()

function blurSwitch() {
    if (localStorage.getItem("blurStatus") === 'true') {
        document.querySelectorAll('*').forEach(element => {
            element.style.backdropFilter = 'none';
        });

        localStorage.setItem("blurStatus", 'false')
    } else {
        document.querySelectorAll('*').forEach(element => {
            element.style.backdropFilter = '';
        });

        localStorage.setItem("blurStatus", 'true')
    }
}
