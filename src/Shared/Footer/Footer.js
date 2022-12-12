import './Footer.css'

export function Footer(){
    
    return(
        
            <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/logoskillet.png?alt=media&token=83827715-9b9a-45cc-be56-d58a39b901f9" alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold0">SOBRE LA BANDA</h2>
                        <h4>Banda de rock</h4>
                        <br/>
                        <h2 className="fw-bold0">SOBRE LA BANDA</h2>
                        <h4>Banda de rock</h4>
                    </div>
                    <div className="col-12 col-md-4">
                    <i className="bi bi-instagram fuente me-5"></i>
                    <i className="bi bi-facebook fuente me-5"></i>
                    <i className="bi bi-tiktok fuente me-2"></i>
                    </div>
                    
                </div>

            </div>
            </footer>

         
        
    )
}