import './Home.css'

import { Footer } from '../Shared/Footer/Footer'
export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>SKILLET</h2>
                            <p>
                            Skillet es una banda de rock cristiano y metal cristiano​​​ originaria de Tennessee, fundada en 1996 y conformada por John y Korey Cooper, Seth Morrison y Jen Ledger. El grupo ha publicado once álbumes de estudio, el más reciente, Dominion, en el 2022.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/ghfg.jpg?alt=media&token=eec15564-ae3f-4f45-81b2-73806d017fee" alt=""></img>

                        </div>
                        <div className="col-12 col-md-4 ">
                        
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-vinyl fs-1"></i>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <h1>Cali</h1>
                                    </div>
                                    <div className="row">
                                        <h1>Dec 10</h1>
                                    </div>
                                </div>
                            </div>

                             <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-vinyl fs-1"></i>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <h1>Bogota</h1>
                                    </div>
                                    <div className="row">
                                        <h1>Dec 25</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1">
                                    <i className="bi bi-vinyl fs-1"></i>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <h1>Barranquilla</h1>
                                    </div>
                                    <div className="row">
                                        <h1>Dec 30</h1>
                                    </div>
                                </div>
                            </div>                            
                            
                        
                        
                        

                        </div>
                    </div>
                </div>


            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/skillet2.jpg?alt=media&token=43df7d3c-def2-493d-890d-882d9bcf8c4c" alt="" className="img-fluid w-100"/>
                            <p>
                            SARTÉN RIAA…
                                12x rockeros platino SKILLET regresaron recientemente de Europa después de una gira de verano por ocho países, tocando frente a 300,000, incluidos Austria, Francia,          
                            </p>
                        </div>
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/skillet%203.jpeg?alt=media&token=8981d434-91bd-4a20-8277-be6d338c6ed1" alt="" className="img-fluid w-100"/>
                            <p>
                            Nashville, TN.... 8 de febrero de 2022: DOMINION (Atlantic), la banda de rock SKILLET's DOMINION (Atlantic), 12 veces platino y nominada al GRAMMY, está teniendo un impacto después de su primer puesto...
                            </p>
                        </div>
                        <div className="col-12 col-md-4">

                            <img src="https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/1575494120.webp?alt=media&token=666fe090-c8a0-495c-b9cd-a0b660ed0379" alt="" className="img-fluid w-100"/>
                            <p>
                            Las mejores personalidades activas de rock en la radio sorprenden a la banda con placas en Dallas y Orlando El último sencillo de rock activo "Legendary" marca el décimo sencillo de rock activo de la banda entre los 10 mejores como WWE, MLB, NBA y NCAA Canción destacada casi agotada - Gira europea...
                            </p>
                        </div>
                        
                    </div>
                </div>
            </section>
            <Footer/>
            
        </>
    )

}