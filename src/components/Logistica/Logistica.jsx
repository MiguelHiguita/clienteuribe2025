import "./Logistica.css"
import { RegistroLogistica } from "../RegistroLogistica/RegistroLogistica"
import { useState, useEffect } from "react";
import { consultarLogisticos } from "../../services/servicioLogistico";

export function Logistica() {

    // Creo dos variables de estado para consumir el api
    const[datosLogisticos, setDatosLogistico] = useState([])
    const[carga, setCarga] = useState(false)
    
    useEffect(()=>{
        consultarLogisticos().then((respuesta)=>{
            console.log(respuesta)
            setCarga(true)
            setDatosLogistico(respuesta)
        })
    },[])

    if(carga){
        return (
            <>
                <section className="banner-logistica"></section>
    
                <section className="container-my-5 text center">
                    <section className="row p-5">
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center shadow p-5">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque officiis soluta beatae rerum vel aspernatur minus excepturi neque, fuga veniam repellendus obcaecati magni. Architecto quos dolores, nam beatae odit ducimus!
                            </p>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <h3>LogisticaApp</h3>
                            <img
                                src="../../../src/assets/warehouse-staff-moving-pallets-and-organizing-boxes-for-shipping-operating-forklifts-for-efficient-logistics-free-png.png"
                                alt="pana"
                                className="img-fluid img"
                            />
                        </div>
                    </section>
                </section>
    
                <section className="container">
                    <div className="row">
                        <div className="col12 text-center">
                            <h3>Registrate para logistica</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea, minima eaque architecto ratione rerum magni iusto iure ipsam incidunt iste dolore velit dolores ipsum esse cum doloribus deserunt consequuntur!</p>
                            <RegistroLogistica></RegistroLogistica>
                        </div>
                    </div>
                </section>

                <section className="container">
                    <section className="row row-cols-1 row-cols-md-3">
                        {
                            datosLogisticos.map((logistico)=>{
                                return(
                                    <div className="col">
                                        <div className="card h-100 shadow p-3">
                                            <h3>{proveedor.nombres}</h3>
                                            <h3>{proveedor.correo}</h3>
                                            <h3>{proveedor.representante}</h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </section>
                </section>
            </>
        )
    }


    
}