console.log('Que tal!');
function dos() {
    console.log(2);
}
function cambiarTitulo() {
    var etiquetaTitulo = document
        .getElementById('titulo');
    etiquetaTitulo.innerText = 'Adios mundo!';
    etiquetaTitulo.className = 'cafe';
    eliminarEventoOnMouseEnterEnBoton();
}
function eliminarEventoOnMouseEnterEnBoton() {
    var etiquetaBotonTitulo = document
        .getElementById('boton_titulo');
    etiquetaBotonTitulo.onmouseenter = undefined;
}
function crearContenido() {
    var etiquetaContenedora = document
        .getElementById('contenido');
    var elementoTitulo = document
        .createElement('h5');
    elementoTitulo.className = 'card-title';
    elementoTitulo.textContent = 'Titulo';
    var elementoParrafo = document
        .createElement('p');
    elementoParrafo.className = 'card-text';
    elementoParrafo.textContent = 'Contenido';
    var elementoBoton = document
        .createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';
    var contenedorCardBody = document
        .createElement('div');
    contenedorCardBody.className = 'card-body';
    contenedorCardBody.appendChild(elementoTitulo);
    contenedorCardBody.appendChild(elementoParrafo);
    contenedorCardBody.appendChild(elementoBoton);
    var etiquetaImagen = document
        .createElement('img');
    etiquetaImagen.src = 'https://i.ytimg.com/vi/28P7oSkPK2M/hqdefault.jpg';
    etiquetaImagen.className = 'card-img-top';
    etiquetaImagen.alt = 'Imagen de mario typing';
    var etiquetaCarta = document
        .createElement('div');
    etiquetaCarta.className = 'card';
    etiquetaCarta.appendChild(etiquetaImagen);
    etiquetaCarta.appendChild(contenedorCardBody);
    // meter el contenido html en el contenedor
    etiquetaContenedora.appendChild(etiquetaCarta);
}
function traerPost(idPost) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4
            && this.status == 200) {
            console.log(this.responseText);
            var postJson = JSON.parse(this.responseText);
            console.log(postJson);
            console.log(postJson.userId);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/" + idPost, true);
    xhttp.send();
}
