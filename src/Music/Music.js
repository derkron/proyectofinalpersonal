import "./Music.css"
import {servicioCancionesTop}from "../services/servicioCanciones"
import { useState,useEffect } from "react"


export function Music(){
    //usando el hook usestate para almacenar la respuesta del api de forma global

    const[canciones,setCanciones]=useState(null)//carga de canciones

    const[estadoCarga,setEstadoCarga]=useState(true)// cargo o no cargo


    //Usando el hook useeffect para limitar el consumo del api a una sola vez.

    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })
    },[])
    
    //Render del componente:
    if(estadoCarga==true){

        return(
            <>
                <h2>Estamos cargando las canciones</h2>
            </>
        )


    }else{
        return(
            <>
                <div className="container">
                <h2>Canciones de la banda:</h2>
                    <div className="row row-cols-1 row-cols-md-5 g-5">
                        

                    {
                        
                        canciones.tracks.map(function(cancion, index){

                        
                            return(
                                
                                    <div className="col" key={index}>
                                        <div className="card h-100 shadow">
                                            <img src={cancion.album.images[0].url} alt="foto" className=" img-fluid w-100 imagenes"></img>
                                            <h3 className="fuente_nombre">{cancion.name}</h3>
                                            <audio controls src={cancion.preview_url}className="audio"></audio>
                                            <p className="fuente">Popularidad : {cancion.popularity}</p>
                                            
                                            

                                            
                                                
                                            

                                        </div>
                                    </div>
                                    
                                
                            )
                            
                        })
                    }

                </div>
            </div>
            
            </> 
            
        )


    
        
    }

    
    

    
}