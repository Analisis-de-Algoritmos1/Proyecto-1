//funcion para generar pedidos.
//esta función recibe un parámetro cantidad que indica la cantidad de pedidos a generar


import { useState } from 'react'

function GeneradorPedidos({ agregarPedidos }) {
  const [cantidad, setCantidad] = useState('5')

  const manejarGeneracion = (e) => {
    e.preventDefault()

    const numero = Number(cantidad)

    if (
      cantidad.trim() === '' ||
      !Number.isSafeInteger(numero) ||
      numero < 1 ||
      numero > 100
    ) {
      alert('Ingrese una cantidad entera entre 1 y 100.')
      return
    }

    agregarPedidos(numero)
  }

  return (
    <div className="seccion-generador">
      <h3>Generación aleatoria de pedidos</h3>

      <p>
        Seleccione la cantidad de pedidos que desea generar.
      </p>

      <form className="generador" onSubmit={manejarGeneracion}>
        <input
          type="number"
          min="1"
          max="100"
          step="1"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />

        <button type="submit">
          Generar pedidos
        </button>
      </form>
    </div>
  )
}

export default GeneradorPedidos
