/**
 * Función: Muestra gráficamente el porcentaje de capacidad
 * utilizado por los pedidos seleccionados.
 *
 * Entradas: Peso total de los pedidos seleccionados y
 * capacidad máxima del vehículo.
 *
 * Salidas: Barra de progreso con el porcentaje de utilización
 * y los kilogramos utilizados.
 */

function BarraCapacidad({ pesoTotal, capacidad }) {
  const capacidadNumero = Number(capacidad)

  if (!Number.isFinite(capacidadNumero) || capacidadNumero <= 0) {
    return null
  }

  const porcentaje = (pesoTotal / capacidadNumero) * 100

  const porcentajeVisual = Math.min(
    Math.max(porcentaje, 0),
    100
  )

  return (
    <div className="barra-capacidad-contenedor">
      <h4>Utilización de la capacidad del vehículo</h4>

      <div className="barra-capacidad">
        <div
          className="barra-capacidad-progreso"
          style={{ width: `${porcentajeVisual}%` }}
        />
      </div>

      <div className="barra-capacidad-info">
        <span>
          {pesoTotal} kg utilizados de {capacidadNumero} kg
        </span>

        <strong>{porcentaje.toFixed(2)}%</strong>
      </div>

      {porcentaje >= 100 && (
        <p className="capacidad-completa">
          {porcentaje > 100
            ? 'Advertencia: se ha superado la capacidad.'
            : 'Se ha utilizado toda la capacidad del vehículo.'}
        </p>
      )}
    </div>
  )
}

export default BarraCapacidad
