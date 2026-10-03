const botaoSim = document.getElementById('botaoSim');
const botaoNao = document.getElementById('botaoNao');
const titulo = document.querySelector('.titulo');
const gato = document.getElementById('gato');

const textos = [
    "Você me ama?",
    "Você tem certeza ???",
    "Tem certeza mesmo? 🤨",
    "Pensa bem... 😳"
];

let nivel = 0;


// ==========================
// BOTÃO NÃO
// ==========================

botaoNao.addEventListener('click', () => {

    if (nivel < 3) {

        nivel++;

        titulo.textContent = textos[nivel];

        botaoSim.style.transform =
            `scale(${1 + nivel * 0.4})`;

        botaoNao.style.transform =
            `scale(${1 - nivel * 0.20})`;
    }


    // ==========================
    // TROCA O GATO
    // ==========================

    if (nivel === 1) {

        gato.src = '../img/gato3.gif';

    }

    if (nivel === 2) {

        gato.src = '../img/gato4.gif';

    }

    if (nivel === 3) {

        gato.src = '../img/gato5.gif';

    }


    // ==========================
    // FAZ O NÃO FUGIR
    // ==========================

    const posicao =
        botaoNao.getBoundingClientRect();

    botaoNao.classList.add('fugindo');

    botaoNao.style.left =
        `${posicao.left}px`;

    botaoNao.style.top =
        `${posicao.top}px`;


    const margem = 20;

    const largura =
        botaoNao.offsetWidth;

    const altura =
        botaoNao.offsetHeight;


    const maxX =
        window.innerWidth - largura - margem;

    const maxY =
        window.innerHeight - altura - margem;


    const novaPosicaoX =
        Math.random() * (maxX - margem) + margem;

    const novaPosicaoY =
        Math.random() * (maxY - margem) + margem;


    botaoNao.style.left =
        `${novaPosicaoX}px`;

    botaoNao.style.top =
        `${novaPosicaoY}px`;

});


// ==========================
// BOTÃO SIM
// ==========================

botaoSim.addEventListener('click', () => {

    document.body.classList.add('saindo');

    setTimeout(() => {

        window.location.href =
            '../Pagina 2/pagina2.html';

    }, 400);

});