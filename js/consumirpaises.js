function consumirPaises() {

    var url = 'https://restcountries.com/v3.1/independent?status=true'

    fetch(url)
    .then(respuesta => {

        return respuesta.json()

    })
    .then(paises => {

        console.log("Iniciando poblado de tablas")
        var tablaPaises = document.getElementById("tablaPaises")
        for (pais of paises) {

            var fila = tablaPaises.insertRow(-1)
            var columaNombre = fila.insertCell(0)
            var columaSubregion = fila.insertCell(1)
            
            columaNombre.innerHTML = pais.name.common
            columaSubregion.innerHTML = pais.capital

        }

    })
    .catch(error => {

        console.error('Error', error)
    } )


}