import "./Home.css";
import { RegistroProveedor } from "../RegistroProveedor/RegistroProveedor";
import { useState, useEffect } from "react";

export function Home() {

  // Creo dos variables de estado para consumir el api
  const[datosProveedires, setDatosProveedor] = useState([])
  const[carga, setCarga] = useState(false)

  useEffect(()=>{},[])

  return (
    <>
      <section className="banner"></section>

      <section className="container-my-5 text-center">
        <section className="row p-5">
          <div className="col-12 col-md-6">
            <h3>ProveedorAPP</h3>
            <img
              src="../../../src/assets/robot-6654032_1280.png"
              alt="pana"
              className="img-fluid img"
            />
          </div>
          <div className="col-12 col-md-6 align-self-center shadow p-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              commodi deleniti accusantium quas non vel veritatis tempore quia
              exercitationem architecto explicabo debitis ipsa quo consequatur
              earum id, ipsum cum perferendis possimus laboriosam. Veniam quo,
              cumque sint enim, asperiores a nobis magnam rem iste impedit
              fugiat quae praesentium, consequatur quisquam fugit.
            </p>
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h3>Registrate como proveedor</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ipsum porro corrupti quia praesentium reiciendis
              tempora amet mollitia impedit, eligendi quasi repellat, a nisi
              voluptate, placeat ratione fuga. Doloremque, aspernatur.
            </p>
            <RegistroProveedor></RegistroProveedor>
          </div>
        </div>
      </section>
    </>
  );
}
