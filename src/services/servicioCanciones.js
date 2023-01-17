//RECETA PARA CONSUMIR UN API CON REACT
import { generarToken } from "./servivcioToken"

export async function servicioCancionesTop(){

    let token=await generarToken()

    //1. Pa onde vas y a que vas, escribir la url del serevicio del api
    const URL="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=US"

    //2. Que operación vas a hacer en la base de datos
    //Configurar la petición de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }


    //3. Nos vamos pal restaurante, Consumimos el api

    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones
}