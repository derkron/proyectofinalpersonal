
import { useNavigate } from "react-router-dom"
import { Footer } from "../Shared/Footer/Footer"

export function Mercancia(){
    //Activamos la navegación entre componentes cuando se de un evento
    let navegacion=useNavigate()

    //que hago cuando se de el evento....
    function detectarEvento(productoSeleccionado){
        //console.log(productoSeleccionado)
        navegacion('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Nuestros productos"

    let productos=[
        {
            nombre:"Camiseta original gira",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto%201.jpg?alt=media&token=34e9cbd4-a8ec-4af4-86b3-d74d0fa5d317",
            precio:15
        },
        {
            nombre:"Camiseta original comatose",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto%202.jpg?alt=media&token=41e92164-ee08-4a9a-8ed7-d7408bac1155",
            precio:20
        },
        {
            nombre:"Camiseta original mujer",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto7.jpeg?alt=media&token=493dc4ab-6309-44ce-a79a-057c9fc8166c",
            precio:35

        },
        {
            nombre:"Camiseta original unleashed",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto6.jpg?alt=media&token=ce2d9be6-006a-4838-9a08-f086c6c06477",
            precio:20
        },
        {
            nombre:"Camiseta original tipo polo",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto5.jpg?alt=media&token=9d8549b0-b8d1-4cff-a8bf-dca45eed6c4c",
            precio:15
        },
        {
            nombre:"Camiseta original awake",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/proyecto4.jpg?alt=media&token=84d2e276-a64e-437c-bec8-1c4a7eafa8c2",
            precio:15
        },
    ]



    return(
        <>
            <h1>{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">

                    {

                        productos.map(function(producto,id){
                            return(
                                <div key={id}>
                                    <div className="col">
                                        <div className="card h-100 shadow">
                                            
                                            <img src={producto.foto} alt="foto" className="h-100 img-fluid w-100"/>
                                            <p>
                                                {producto.nombre}
                                            </p>
                                                <h4>Precio</h4>
                                            <p>
                                                {producto.precio}$
                                            </p>

                                            <button className="btn btn-primary mx-3 my-3" onClick={
                                                function(){
                                                    detectarEvento(producto)
                                                }
                                            }>Ampliar</button>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}