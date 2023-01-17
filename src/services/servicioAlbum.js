import { generarToken } from "./servivcioToken"

export async function serevicioAlbums (){
    let token=await generarToken()

    const url="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/albums?market=US"

    const peticion={
        method:"GET",
        headers:{Authorization:token}
    }

    let resp=await fetch(url,peticion)
    let albums=await resp.json()

    return albums
}