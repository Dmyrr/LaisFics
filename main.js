var visivel = false;

function mostrarLista(btnLivro){
    const livro = btnLivro.parentElement.id || btnLivro.parentNode.id;
    const listLinks = document.querySelector('#'+livro+' .list-links');

    if (listLinks.style.display == "none") {
        listLinks.style.display = "flex";
    } else {
        listLinks.style.display = "none";
    }
}