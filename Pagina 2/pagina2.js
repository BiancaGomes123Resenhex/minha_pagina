const inicio = document.getElementById('inicio');
const presente1 = document.getElementById('presente1');
const presente2 = document.getElementById('presente2');


function mudarPagina(pagina) {

    document.body.classList.add('saindo');

    setTimeout(() => {

        window.location.href = pagina;

    }, 400);

}


// BOTÃO INÍCIO

inicio.addEventListener('click', () => {

    mudarPagina('../Pagina 1/index.html');

});


// PRESENTE 1

presente1.addEventListener('click', () => {

    mudarPagina('../Presente 1/presente1.html');

});


// PRESENTE 2

presente2.addEventListener('click', () => {

    mudarPagina('../Presente 2/presente2.html');

});