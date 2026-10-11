//funcion encargada de definir la capacidad del vehiculo

function CapacidadForm({ capacidad, setCapacidad }) {
  return (
    <div>
      <h3>Capacidad máxima del vehículo</h3>

      <p>
        Ingrese el peso máximo que puede transportar
        el vehículo.
      </p>

      <div className="capacidad-form">
        <label htmlFor="capacidad">
          Capacidad (kg):
        </label>

        <input
          id="capacidad"
          type="number"
          min="1"
          step="1"
          value={capacidad}
          onChange={(e) => setCapacidad(e.target.value)}
          placeholder="Ejemplo: 100"
        />
      </div>

      {capacidad !== '' && Number(capacidad) > 0 && (
        <p className="capacidad-info">
          Capacidad configurada: <strong>{capacidad} kg</strong>
        </p>
      )}
    </div>
  )
}

export default CapacidadForm
