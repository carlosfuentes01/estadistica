var directorioImagenes = '../recursos/imagenes/'

function crearNodo(tipoNodo) {

    var nodo = document.createElement(tipoNodo)
    return nodo

}

function crearNodoConTexto(tipoNodo, textoNodo){
    var nodo = document.createElement(tipoNodo)
    var textoNodo = document.createTextNode(textoNodo)
    nodo.appendChild(textoNodo)
    document.body.appendChild(nodo)

}

function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo("img")
    nodo.src = directorioImagenes + nombreImagen
    nodo.alt = alt
    return nodo

}

function crearNodoImagenURL(url, alt) {
    console.log(url)
    var nodo = crearNodo("img")
    nodo.src = url
    nodo.alt = alt
    return nodo

}

function borrarFilasTabla(tabla) {
    var filas = tabla.rows.length

    for (var i = 0; i < filas; i++) {
        tabla.deleteRow(0)
    }
}