//funcion para generar pedidos aleatorios
//esta función recibe un parámetro cantidad que indica la cantidad de pedidos a generar

import { useState } from 'react'

function GeneradorPedidos({ agregarPedidos }) {
  const [cantidad, setCantidad] = useState(5)

  const manejarGeneracion = () => {
    const numero = Number(cantidad)

    if (!Number.isInteger(numero) || numero < 1 || numero > 1000) {
      alert('Ingrese una cantidad entre 1 y 1000.')
      return
    }

    agregarPedidos(numero)
    agregarPedidos(nuevosPedidos)
  }

  return (
    <div>
      <h3>Generación aleatoria de pedidos</h3>

      <p>Seleccione la cantidad de pedidos que desea generar.</p>

      <div className="generador">
        <input
          type="number"
          min="1"
          max="1000"
          step="1"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="button" onClick={manejarGeneracion}>
          Generar pedidos
        </button>
      </div>
    </div>
  )
}

export default GeneradorPedidos
