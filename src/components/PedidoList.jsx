/**
 * Función: Muestra los pedidos registrados en una tabla y permite
 * eliminarlos individualmente o limpiar el listado completo.
 * También identifica los pedidos cuyo peso supera la capacidad
 * del vehículo.
 *
 * Entradas: Lista de pedidos, capacidad del vehículo y funciones
 * para eliminar o limpiar registros.
 *
 * Salidas: Tabla actualizada, resumen de pedidos y advertencias
 * de capacidad cuando corresponda.
 */

function PedidoList({ pedidos, eliminarPedido, limpiarPedidos, capacidad }) {
  return (
    <div>
      <h3>Pedidos registrados: {pedidos.length}</h3>
        {pedidos.length > 0 && (
            <button
                type="button"
                className="boton-limpiar"
                onClick={limpiarPedidos}
            >
                Limpiar todos los pedidos
            </button>
        )}
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados todavía.</p>
      ) : (
        <div className="tabla-contenedor">
          <table className="tabla-pedidos">
            <thead>
              <tr>
                <th>N.º</th>
                <th>Nombre</th>
                <th>Peso (kg)</th>
                <th>Beneficio</th>
                <th>Coordenada X</th>
                <th>Coordenada Y</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido, index) => (
                <tr key={pedido.id}>
                  <td>{index + 1}</td>
                  <td>{pedido.nombre}</td>
                  <td>
                    {pedido.peso} kg

                    {Number(capacidad) > 0 &&
                      pedido.peso > Number(capacidad) && (
                        <span className="advertencia-peso">
                          Supera la capacidad
                        </span>
                      )}
                  </td>
                  <td>{pedido.beneficio}</td>
                  <td>{pedido.x}</td>
                  <td>{pedido.y}</td>
                  <td>
                    <button
                        type="button"
                        className="boton-eliminar"
                        onClick={() => eliminarPedido(pedido.id)}
                    >
                        Eliminar
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default PedidoList
