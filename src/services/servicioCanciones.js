//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. Pa onde vas y a que vas, escribir la url del serevicio del api
    const URL="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=US"

    //2. Que operación vas a hacer en la base de datos
    //Configurar la petición de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQDegidUa70Q5pY8A_B32OKW2zYqoAaDFjEu9LMVIa57eRSA2XttQclpIrPYKC5mf-L1NbaI_no5xey8cyhQXUXbz8UHh5kMi8cxJgumTzhjn8lsMgtcJQWci9iogF8hPETkhtFHxR7xO0kmHa4HHb-ujInxySyufRB7T4ARNO2foFMBn8Cy5oDbG1xxX4M"}
    }


    //3. Nos vamos pal restaurante, Consumimos el api

    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones
}