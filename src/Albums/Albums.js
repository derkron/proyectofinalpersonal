import"./Albums.css"
import { serevicioAlbums } from "../services/servicioAlbum"
import { useState,useEffect } from "react"

export function Albums(){

    const[albums,setAlbums]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)


    useEffect(function(){
        serevicioAlbums().then(function(respuesta){
            setAlbums(respuesta)
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
                <h2>Albums de la banda:</h2>
                <div className="row row-cols-1 row-cols-md-4 g-5">

                {
                    albums.items.map(function(alb,id){
                        console.log(alb)

                        return(
                            <div key={id}>
                                <div className="col">
                                    <div className="card  shadow tama">
                                        <img src={alb.images[0].url}/>
                                        <p><span className="fuente_letras">Nombre del album: </span>{alb.name}</p>
                                        <p><span className="fuente_letras">Fecha publicacion: </span>{alb.release_date}</p>
                                        <p><span className="fuente_letras">Total canciones: </span>{alb.total_tracks}</p>
                                    </div>
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
