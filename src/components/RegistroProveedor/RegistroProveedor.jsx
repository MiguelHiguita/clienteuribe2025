export function RegistroProveedor(){
    return (

    <>
        <form className="border rounder p-5">

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombres" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Documento" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Dirección" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Ciudad" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Representante" />
            </div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Telefono Contacto" />
            </div>

            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo" />
            </div>

            <div className="mb-3">
                <input type="date" className="form-control" placeholder="Fecha Envío" />
            </div>

            <div className="mb-3">
                <input type="number" className="form-control" placeholder="Costo Envío" />
            </div>

            <div className="mb-3">
                <textarea type="text" className="form-control" placeholder="Descripción" />
            </div>

            <button className="btn btn-primary w-100">Enviar</button>

        </form>
    </>

    )
}