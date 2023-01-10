import {servicioCancionesTop}from "../services/servicioCanciones"
export function Music(){

    servicioCancionesTop()

    return(
        <>
            <h2>Musica de la banda</h2>
        </>
    )
}