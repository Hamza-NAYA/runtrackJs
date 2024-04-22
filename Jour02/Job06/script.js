const codeKonami = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
];
let index = 0;

function handleKonamiCode(event) {
    if (event.key === codeKonami[index]) {
        index++;
        if (index === codeKonami.length) {
            applyPlateformeStyle();
            index = 0;
            hideContainer();
        }
    } else {
        index = 0;
    }
}

function applyPlateformeStyle() {
    document.body.classList.add('plateforme-style');
}


function hideContainer() {
    const container = document.querySelector('.container');
    container.style.display = 'none';
}

document.addEventListener('keydown', handleKonamiCode);