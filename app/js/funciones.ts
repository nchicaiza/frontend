console.log('Que tal!');

function dos() {
    console.log(2);
}

function cambiarTitulo() {
    const etiquetaTitulo = document
        .getElementById('titulo');
    etiquetaTitulo.innerText = 'Adios mundo!';
    etiquetaTitulo.className = 'cafe';
    eliminarEventoOnMouseEnterEnBoton();
}

function eliminarEventoOnMouseEnterEnBoton() {
    const etiquetaBotonTitulo = document
        .getElementById('boton_titulo');
    etiquetaBotonTitulo.onmouseenter = undefined;
}


function crearContenido() {
    const etiquetaContenedora = document
        .getElementById('contenido');

    const elementoTitulo = document
        .createElement('h5');
    elementoTitulo.className = 'card-title';
    elementoTitulo.textContent = 'Titulo';

    const elementoParrafo = document
        .createElement('p');
    elementoParrafo.className = 'card-text';
    elementoParrafo.textContent = 'Contenido';

    const elementoBoton = document
        .createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';

    const contenedorCardBody = document
        .createElement('div');
    contenedorCardBody.className = 'card-body';
    contenedorCardBody.appendChild(elementoTitulo);
    contenedorCardBody.appendChild(elementoParrafo);
    contenedorCardBody.appendChild(elementoBoton);

    const etiquetaImagen = document
        .createElement('img');
    etiquetaImagen.src = 'https://i.ytimg.com/vi/28P7oSkPK2M/hqdefault.jpg';
    etiquetaImagen.className = 'card-img-top';
    etiquetaImagen.alt = 'Imagen de mario typing';

    const etiquetaCarta = document
        .createElement('div');
    etiquetaCarta.className = 'card';
    etiquetaCarta.appendChild(etiquetaImagen);
    etiquetaCarta.appendChild(contenedorCardBody);

    // meter el contenido html en el contenedor
    etiquetaContenedora.appendChild(etiquetaCarta);


}

function traerPost(idPost: number) {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4
            && this.status == 200) {
            console.log(this.responseText);
            const postJson = JSON.parse(this.responseText);
            console.log(
                postJson
            );
            console.log(
                postJson.userId
            );
        }
    };

    xhttp.open(
        "GET",
        "https://jsonplaceholder.typicode.com/posts/" + idPost,
        true);

    xhttp.send();

}