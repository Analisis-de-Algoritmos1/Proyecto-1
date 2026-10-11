
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
