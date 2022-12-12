import { useLocation } from "react-router-dom"
export function AmpliarInfo(){

    let recepcionDatos=useLocation()

    let producto=recepcionDatos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <h1>{producto.nombre}</h1>
            <div className="card h-100 shadow">
                <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"></img>
            </div>
        </>
    )
}