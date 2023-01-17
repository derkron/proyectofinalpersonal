

export async function serevicioAlbums (){

    const url="https://api.spotify.com/v1/artists/49bzE5vRBRIota4qeHtQM8/albums?market=US"

    const peticion={
        method:"GET",
        headers:{Authorization:"Bearer BQAIzAgEoaIpJYu8lqi9tPye3p35_KrboDIFhhAJetRxM_kmLSbb-7eN1u8Bg66tDeQXBCxj3V4DX4yyXqnRB3Y2t393r4NlPSQhzZikKvG2mUrJCjEbcYaQMUk0Wp5jDwYrx5tgzKzM-TUiExRV-LDz1oPOLytS4GoXfRu37XCjVNA5iqks-BXx-vlDacI"}
    }

    let resp=await fetch(url,peticion)
    let albums=await resp.json()

    return albums
}