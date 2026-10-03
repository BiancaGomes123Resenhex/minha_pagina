const inicio = document.getElementById('inicio');

inicio.addEventListener('click', () => {

    document.body.classList.add('saindo');

    setTimeout(() => {
        window.location.href = '../Pagina 2/pagina2.html';
    }, 400);

});