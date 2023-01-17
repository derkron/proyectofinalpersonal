



export async function generarToken(){

    const client_id="client_id=d4622002c3134b9599430bd922ca5ffc"
    const client_secret="client_secret=93846980a4464efdb13bd38f02127b46"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)
    let token=await respuesta.json()
    let tokenDefinitivo=token.token_type+" "+token.access_token
    
    return(tokenDefinitivo)
}