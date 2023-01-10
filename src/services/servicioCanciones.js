//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. Pa onde vas y a que vas, escribir la url del serevicio del api
    const URL="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=US"

    //2. Que operación vas a hacer en la base de datos
    //Configurar la petición de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQA_p253o7EIM3sHAGPff4nUDPb33vKNXaupGWNNmOzSSGLI9zU3tjTwu9WlhXTN6VT6KC3zQw-koYyVXjy2yeNfkaKlMFQA3-o53Ue3PqUCBRteRQv-XkTDYKiD2vBPXFPZcPK0h478RKWbEdWCI6TozCqyzg5VVQtBjhz84magtT0x8KIGNCzCFMqavgw"}
    }


    //3. Nos vamos pal restaurante, Consumimos el api

    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    console.log(canciones)
}