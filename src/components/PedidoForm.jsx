
import { useState } from 'react'

/**
 * Función: Permite al usuario registrar pedidos manualmente,
 * verificando que los datos ingresados sean válidos antes
 * de agregarlos al sistema.
 *
 * Entradas: Nombre del pedido, peso, beneficio y
 * coordenadas X e Y.
 *
 * Salidas: Objeto con la información del pedido registrado,
 * que se envía al componente principal para almacenarlo.
 */

function PedidoForm({ agregarPedido }) {
  const [nombre, setNombre] = useState('')
  const [peso, setPeso] = useState('')
  const [beneficio, setBeneficio] = useState('')
  const [x, setX] = useState('')
  const [y, setY] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()

    const pesoNumero = Number(peso)
    const beneficioNumero = Number(beneficio)
    const xNumero = Number(x)
    const yNumero = Number(y)

    if (
      !nombre.trim() ||
      peso === '' ||
      beneficio === '' ||
      x === '' ||
      y === ''
    ) {
      alert('Por favor, complete todos los campos.')
      return
    }

    if (!Number.isSafeInteger(pesoNumero) || pesoNumero <= 0) {
      alert('El peso debe ser un número entero mayor que cero.')
      return
    }

    if (!Number.isSafeInteger(beneficioNumero) || beneficioNumero <= 0) {
      alert('El beneficio debe ser un número entero mayor que cero.')
      return
    }

    if (!Number.isFinite(xNumero) || !Number.isFinite(yNumero)) {
      alert('Las coordenadas deben ser números válidos.')
      return
    }

    const nuevoPedido = {
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      peso: pesoNumero,
      beneficio: beneficioNumero,
      x: xNumero,
      y: yNumero
    }

    agregarPedido(nuevoPedido)

    setNombre('')
    setPeso('')
    setBeneficio('')
    setX('')
    setY('')
  }

  return (
    <div>
      <h3>Registro de pedidos</h3>
      <p>Ingrese los datos para registrar un pedido manualmente.</p>

      <form onSubmit={manejarEnvio} className="formulario">
        <label>
          Nombre del pedido
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ejemplo: Pedido especial"
            required
          />
        </label>

        <label>
          Peso (kg)
          <input
            type="number"
            min="1"
            step="1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </label>

        <label>
          Beneficio
          <input
            type="number"
            min="1"
            step="1"
            value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
            placeholder="Ejemplo: 155"
            required
          />
        </label>

        <label>
          Coordenada X
          <input
            type="number"
            step="any"
            value={x}
            onChange={(e) => setX(e.target.value)}
            required
          />
        </label>

        <label>
          Coordenada Y
          <input
            type="number"
            step="any"
            value={y}
            onChange={(e) => setY(e.target.value)}
            required
          />
        </label>

        <button type="submit">Agregar pedido</button>
      </form>
    </div>
  )
}

export default PedidoForm
