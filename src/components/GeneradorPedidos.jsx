import { useState } from 'react'

/**
 * Función: Permite al usuario indicar cuántos pedidos desea
 * generar automáticamente para realizar pruebas en el sistema.
 *
 * Entradas: Cantidad de pedidos que se desean generar.
 *
 * Salidas: Solicitud de generación de la cantidad indicada,
 * que se envía al componente principal.
 */

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
