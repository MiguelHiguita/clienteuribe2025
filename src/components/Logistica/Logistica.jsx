import "./Logistica.css"
import { RegistroLogistica } from "../RegistroLogistica/RegistroLogistica"

export function Logistica() {
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
                            src="../../../src/assets/angry-cat-meme-sticker-illustration-free-png (1).png"
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
        </>
    )
}