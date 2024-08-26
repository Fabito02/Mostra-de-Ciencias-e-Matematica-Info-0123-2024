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

