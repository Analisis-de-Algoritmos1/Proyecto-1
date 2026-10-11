// aqui se mostrara la lista de pedidos registrados
// recibe los pedidos desde App.jsx y los organiza en una tabla para su visualización

function PedidoList({ pedidos }) {
  return (
    <div>
      <h3>Pedidos registrados: {pedidos.length}</h3>

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
              </tr>
            </thead>

            <tbody>
              {pedidos.map((pedido, index) => (
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

export default PedidoList
