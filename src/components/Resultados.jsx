
function Resultados({ resultado, capacidad }) {
  if (!resultado) {
    return (
      <div>
        <h3>Resultados de la optimización</h3>
        <p>
          Todavía no se ha ejecutado el algoritmo.
        </p>
      </div>
    )
  }

  const {
    pedidosSeleccionados,
    totalProcesados,
    pesoTotal,
    beneficioTotal,
    tiempoMs,
    operaciones
  } = resultado

  const porcentajeUso =
    (pesoTotal / Number(capacidad)) * 100

  return (
    <div>
      <h3>Resultados de la optimización</h3>

      <div className="resultados-resumen">
        <div className="resultado-card">
          <h4>Pedidos procesados</h4>
          <p>{totalProcesados}</p>
        </div>

        <div className="resultado-card">
          <h4>Pedidos seleccionados</h4>
          <p>{pedidosSeleccionados.length}</p>
        </div>

        <div className="resultado-card">
          <h4>Peso total</h4>
          <p>{pesoTotal} kg</p>
        </div>

        <div className="resultado-card">
          <h4>Beneficio total</h4>
          <p>{beneficioTotal}</p>
        </div>

        <div className="resultado-card">
          <h4>Uso de capacidad</h4>
          <p>{porcentajeUso.toFixed(2)}%</p>
        </div>

        <div className="resultado-card">
          <h4>Tiempo de ejecución</h4>
          <p>{tiempoMs.toFixed(3)} ms</p>
        </div>

        <div className="resultado-card">
          <h4>Operaciones</h4>
          <p>{operaciones}</p>
        </div>
      </div>

      <h4>Pedidos seleccionados</h4>

      {pedidosSeleccionados.length === 0 ? (
        <p>No se seleccionaron pedidos.</p>
      ) : (
        <div className="tabla-contenedor">
          <table className="tabla-pedidos">
            <thead>
              <tr>
                <th>N.º</th>
                <th>Pedido</th>
                <th>Peso (kg)</th>
                <th>Beneficio</th>
                <th>X</th>
                <th>Y</th>
              </tr>
            </thead>

            <tbody>
              {pedidosSeleccionados.map((pedido, index) => (
                <tr key={pedido.id}>
                  <td>{index + 1}</td>
                  <td>{pedido.nombre}</td>
                  <td>{pedido.peso}</td>
                  <td>{pedido.beneficio}</td>
                  <td>{pedido.x}</td>
                  <td>{pedido.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Resultados
