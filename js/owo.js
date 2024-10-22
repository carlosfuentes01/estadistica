
function owo() {
    
    var url = 'http://127.0.0.1:8001/echo?msg=%22%22mi%20primera%20API%22'

    fetch(url)
    .then(respuesta => {
        console.log(respuesta.msg);
        return respuesta.json()
        
    })
    
    .catch(error => {

        console.error('Error', error)
    } )


}


