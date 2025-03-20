export async function consultarProveedores(){
    //1. Construir el endpoint
    const URL="http://localhost/proveedor";

    //2. Activar la peticion a enviar
    let peticion = {
        method:"GET"

    }

    //3. activo el consumo de la peticion
    let respuesta = await fetch(URL, peticion)
    let proveedoresConsultados = await respuesta.json()
    return proveedoresConsultados
}