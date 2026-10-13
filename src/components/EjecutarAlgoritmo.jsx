/**
 * Función: Presenta el botón que permite iniciar el proceso de
 * optimización y evita su ejecución cuando no existen
 * pedidos registrados.
 *
 * Entradas: Función de ejecución del algoritmo y estado
 * que indica si el botón debe estar habilitado.
 *
 * Salidas: Solicitud de ejecución enviada al
 * componente principal.
 */

function EjecutarAlgoritmo({ ejecutar, deshabilitado }) {
  return (
    <div>
      <h3>Optimización de carga</h3>

      <p>
        Ejecute el algoritmo para seleccionar los pedidos
        que generen el mayor beneficio sin superar la
        capacidad máxima del vehículo.
      </p>

      <button
        type="button"
        className="boton-ejecutar"
        onClick={ejecutar}
        disabled={deshabilitado}
      >
        Ejecutar optimización
      </button>
    </div>
  )
}

export default EjecutarAlgoritmo
