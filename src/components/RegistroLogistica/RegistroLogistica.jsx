export function RegistroLogistica(){
    return(
        <>
        <form className="border rounder p-5">
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nombre Encargado"/>
            </div>
            <div className="mb-3">
                <input type="mail" className="form-control" placeholder="Correo encargado"/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Telefono encargado"/>
            </div>
            <div className="mb-3">
                <input type="date" className="form-control" placeholder="Fecha Receptor"/>
            </div>
            <div className="mb-3">
                <textarea type="text" className="form-control" placeholder="Detalles"/>
            </div>
            <button className="btn btn-primary w-100">Enviar</button>
        </form>
        </>
    )
}