import './Ampliarinfo.css'
import { useLocation } from "react-router-dom"
export function AmpliarInfo(){

    let recepcionDatos=useLocation()

    let producto=recepcionDatos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-5 border-end">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                        
                    </div>
                    <div className="col-12 col-md-4 border p-3">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                        <p className='mt-5'>{producto.descripcion}</p>
                        <h1 className="mt-3 display-1">${producto.precio}<span className="descuento"> 27% off</span></h1>
                        <br/>
                        <span className="badge text-bg-primary">Descuento del dia</span>
                        <p>Hasta 48 cuotas</p>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/visa.png?alt=media&token=d6a922ed-dba2-42b1-a10a-f19ed754bc70' alt='' className='img-fluid'/>
                        <img src='https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/simbolos.png?alt=media&token=bbfebcde-7feb-4bfa-80cf-247f40038608' alt='' className='img-fluid ms-2'/>

                        <br/>
                        <br/>
                        <div className='row mt-5'>
                            <i className="bi bi-truck  fs-1 text-success col-4 " ></i>
                            <p className='text-success fw-bold col-8 mt-3'>Envio gratis a nivel nacional</p>
                            <p>Conoce los tiempos y las formas de envio.</p>

                        </div>
                        <div className='row mt-5'>
                            <i className="bi bi-arrow-clockwise fs-1 text-success col-4 " ></i>
                            <p className='text-success fw-bold col-8 mt-3'>Devolución gratis</p>
                            <p>30 dias para reembolso</p>

                        </div>                        


                    </div>
                </div>
            </div>
            
           
        </>
    )
}