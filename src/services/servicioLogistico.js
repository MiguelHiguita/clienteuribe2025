export async function consultarLogisticos(){
    //1. Construir el endpoint
    const URL="http://localhost:8000/logistica";

    //2. Activar la peticion a enviar
    let peticion = {
        method:"GET"

    }

    //3. activo el consumo de la peticion
    let respuesta = await fetch(URL, peticion)
    let LogisticosConsultados = await respuesta.json()

    console.log(LogisticosConsultados)
    
    return LogisticosConsultados
}