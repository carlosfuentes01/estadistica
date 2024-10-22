function consumirMarvel() {

    var apikey = "d8b02dc109d7a677a61793797397e470";
    var ts = "1000";
    var hash = "15aa89127ec7f5cc41b3362aa8c68a9b";
    var url = 'http://gateway.marvel.com/v1/public/characters?ts=' + ts +"&apikey=" + apikey + "&hash=" + hash;

    fetch(url)
    .then(respuesta => {

        return respuesta.json()

    })
    .then(marvel => {

        var personajes = marvel.data.results
        var tablaMarvel = document.getElementById("tablaMarvel")
      
        borrarFilasTabla(tablaMarvel)

        for (personaje of personajes) {

            var fila = tablaMarvel.insertRow(-1)
            var columaIdentificador = fila.insertCell(0)
            var columaNombre = fila.insertCell(1)
            var columaDescripcion = fila.insertCell(2)
            var columaImagen = fila.insertCell(3)  
            var columnaComics = fila.insertCell(4)


            var urlImagen = personaje.thumbnail.path + '.' + personaje.thumbnail.extension
            var imagen = crearNodoImagenURL(urlImagen, personaje.name)


            var ul = crearNodo('ul')
            var comics = personaje.comics.items

            for (comic of comics) {
                var li = crearNodoConTexto('li', comic.name)
                ul.appendChild(li)
            }

            columaIdentificador.innerHTML = personaje.id
            columaNombre.innerHTML = personaje.name
            columaDescripcion.innerHTML = personaje.description
            columaImagen.appendChild(imagen)
            columnaComics.appendChild(ul)
        }
        

    })
    .catch(error => {

        console.error('Error', error)
    } )



}