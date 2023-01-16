import "./Integrantes.css"
export function Integrantes(){

    let banda="INTEGRANTES"
    let personas=[
        {
            id:1,
            nombre:"Jhon cooper",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/john-cooper.jpg?alt=media&token=fb0452e6-44ab-4da4-a7de-943c22b99403",
            descripcion:": formó la banda Skillet en 1996 junto a Ken Steorts. Ambos se habían conocido durante una gira anterior, cuando Cooper ejercía como vocalista del grupo Seraph y Steorts como guitarrista del grupo Urgent cry. Tras la temprana disolución de ambos grupos, John y Ken les animó a formar su propia banda como un proyecto paralelo. Viniendo de estilos diferentes dentro de la música rock, decidieron poner como nombre a su nuevo proyecto musical Skillet que para ellos significaba “habilidosos”. Poco después, Trey McClurkin se unió a la banda como baterista temporal.'Tan solo había transcurrido un mes desde la fundación del grupo cuando comenzaron a despertar el interés del importante sello discográfico cristiano ForeFront Records, con quienes firmaron contrato poco después. Ken Steorts dejó el grupo en 1999 y Trey McClurkin lo hizo en 2000, quedando John como único miembro fundador de Skillet y principal compositor."
        },
        {
            id:2,
            nombre:"korey cooper",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/koreycooper.jpg?alt=media&token=030e7e15-116c-4c56-b9c9-e314927c8ecd",
            descripcion:":  nacida Korene Marie Pingitore (Kenosha, Wisconsin, 21 de julio de 1972), es la tecladista, guitarrista y vocalista de la banda de rock cristiano Skillet, también es guitarrista en la banda LEDGER en conjunto con Jen Ledger. Su marido, John Cooper, es el cantante y bajista de la banda, así como uno de los miembros fundadores.Antes de unirse a Skillet, Korey era un miembro de la banda Alkeme junto a Lori Peters, su hermana y otras personas de su iglesia. Se unió a Skillet de manera oficial en 1999, entre los álbumes de Hey You, I Love Your Soul e Invencible. Su álbum Comatose fue certificado disco de oro el 18 de noviembre de 200"
        },
        {
            id:3,
            nombre:"Jen Ledger",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/ledger-jen-image.webp?alt=media&token=25d79a90-7736-4f97-8515-7e9a7c47a500",
            descripcion:": es la baterista, compositora y corista de la banda de rock Skillet. También es la vocalista y líder de su propia banda LEDGER, proyecto que lanzó su primer EP en abril de 2018. A los 18 años se convirtió en la baterista cuando se retiró el exbaterista de la banda Lori Peters.Nació en Coventry, Inglaterra. Llegó a los Estados Unidos a los 16 años sus estudios los realizó en Light School of Worship en Kenosha, Wisconsin. Ledger dice y cito «yo sabía muy poco de la banda así que llevó tres años todavía de estar aquí tocando en la banda Skillet Viajó como baterista de Skillet en el 'Tour Comatose',​ donde cantó como solista en la canción 'Mi espera.' o 'Yours to Hold' Ledger canta en el tema 'Hero'​ en su más reciente y 'Awake & Alive'​ en el álbum Awake. También hace los coros en la canción 'Monster' en el remix recientemente presentado como la introducción a un pódcast oficial de la banda.​El año 2018 lanzó su EP debut como solista, bajo el título de 'LEDGER', con su lead single 'Not Dead Yet' el cual cuenta con 6 canciones, incluyendo una colaboración con John Cooper en el tema 'Warrior'. Además irá de gira junto a Skillet con su propia banda 'LEDGER' y también como baterista y vocales de Skillet."
            
        },
        {
            id:4,
            nombre:"Seth Morrison",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotycgm.appspot.com/o/img_Seth-Morrison.jpg?alt=media&token=88f0873d-f278-4365-b5c9-0aff3e293c19",
            descripcion:": comenzó su carrera a la edad de 13 años en una banda llamada 3PO. También tocó junto con la banda Everlasting Fire en algunas demos. Ha compartido el escenario con varias bandas conocidas como Disciple, Kutless, Sanctus Real, Tait, Audio Adrenaline, TobyMac, entre otras. A los 16, tuvo la oportunidad de recorrer Europa con la banda Justifide y realizar varias presentaciones junto a ellos. Poco después, la banda se separó. Ha realizado varias presentaciones más, con bandas como Our Heart's Hero, The Crabb Family, Crabb Revival, entre otras."
        }

    ]
    return(
        <>
            <h1 className="texto">{banda}</h1> 
            <div className="container">
                <div className="row row-cols-2 row-cols-md-2 g-5">
                    {
                        personas.map(function(persona){
                            if (persona.id %2===0){
                                return(
                                <>
                                    <div className="col-4">
                                        <div className="card h-100 shadow">
                                            <img src={persona.foto} alt="foto" className="h-100 img-fluid w-100 tamano">
                                                
                                            </img>
                                            

                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p>
                                            <span className="color">{persona.nombre}</span> {persona.descripcion}
                                        </p>
                                    </div>
                                
                                </>
                            )
                                }
                            else{

                                return(
                                    <>
                                        <div className="col-4">
                                            <p>
                                            <span className="color">{persona.nombre}</span> {persona.descripcion}
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="card h-100 shadow">
                                                <img src={persona.foto} alt="foto" className="h-100 img-fluid w-100">
                                                    
                                                </img>
                                                
    
                                            </div>
                                        </div>
                                        
                                    
                                    </>
                                )

                            }

                        })
                    

                        
                    }
                    
                </div>            
            </div> 
        </>
    )
}