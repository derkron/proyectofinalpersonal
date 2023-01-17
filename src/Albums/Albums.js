import { serevicioAlbums } from "../services/servicioAlbum"
import { useState,useEffect } from "react"

export function Albums(){

    const[album,setAlbumns]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)


    useEffect(function(){
        serevicioAlbums().then(function(respuesta){
            setAlbumns(respuesta)
            setEstadoCarga(false)
        })
    },[])


    if(estadoCarga==true){

                return(
            <>
                <h2>Albums cargando....</h2>
            </>
        )

    }else{
        
        return(
        <>
        
        <div className="container">
            <h2>Canciones de la banda:</h2>
                <div className="row row-cols-1 row-cols-md-4 g-5">

                {
                    album.albums.map(function(alb){


                    
                        console.log(alb)

                    })
                        
                    
                }
                </div>

                </div>
        
        
        </>
            
        
        )
    }
}
