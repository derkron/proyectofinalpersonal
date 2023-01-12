//RECETA PARA CONSUMIR UN API CON REACT

export async function servicioCancionesTop(){

    //1. Pa onde vas y a que vas, escribir la url del serevicio del api
    const URL="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/top-tracks?market=US"

    //2. Que operación vas a hacer en la base de datos
    //Configurar la petición de envio hacia el servidor

    const PETICION={
        method:"GET",
        headers:{Authorization:"Bearer BQCW8TD0YtLAs-41FpksXMNL8sTS9v1vW7CuwgfKKixjHAXKnEg5IacbA3_D9sbOQAZWe7W0lLHFrAOA0Jw4_yeU9cX20HpPdY8GDlRA57SS9OnP9Ly1jA6CfUJ1iCbXS6phFGoRahQdZ_G8bb1_RecsBnlouhrk7ouG5qDa66y542YQWjTcMUNY8jnV0_A"}
    }


    //3. Nos vamos pal restaurante, Consumimos el api

    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

    return canciones
}