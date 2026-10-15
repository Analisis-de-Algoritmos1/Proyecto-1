
import { useEffect, useState } from 'react'

/**
 * Componente: TablaDP
 *
 * Descripción:
 * Visualiza paso a paso la tabla de Programación Dinámica
 * utilizada por el algoritmo de mochila 0/1.
 *
 * Entradas:
 * tablaDP: Matriz calculada por el algoritmo.
 * pedidos: Lista de pedidos procesados.
 *
 * Funcionalidades:
 * - Recorrido manual de estados.
 * - Reproducción automática.
 * - Control de velocidad.
 * - Explicación de las decisiones del algoritmo.
 * - Protección visual para tablas grandes.
 */

function TablaDP({ tablaDP, pedidos }) {
  const [paso, setPaso] = useState(0)
  const [reproduciendo, setReproduciendo] = useState(false)
  const [velocidad, setVelocidad] = useState(300)

  // Información de la tabla.
  const cantidadFilas = tablaDP?.length ?? 0
  const cantidadColumnas = tablaDP?.[0]?.length ?? 0
  const totalCeldas = cantidadFilas * cantidadColumnas

  // Máximo de celdas que se mostrarán en pantalla.
  const limiteVisualizacion = 5000

  // La primera fila y columna son estados iniciales.
  const totalPasos = Math.max(
    0,
    (cantidadFilas - 1) * (cantidadColumnas - 1)
  )

  const visualizacionDisponible =
    totalCeldas <= limiteVisualizacion

  // La reproducción se considera activa solo si
  // todavía existen estados por recorrer.
  const reproduccionActiva =
    reproduciendo &&
    visualizacionDisponible &&
    paso < totalPasos

  /**
   * Reproduce automáticamente los estados.
   * Limpia el temporizador cuando cambia el paso
   * o cuando el usuario pausa la animación.
   */
  useEffect(() => {
    if (!reproduccionActiva) return

    const temporizador = setTimeout(() => {
      setPaso((anterior) =>
        Math.min(anterior + 1, totalPasos)
      )
    }, velocidad)

    return () => clearTimeout(temporizador)
  }, [reproduccionActiva, paso, totalPasos, velocidad])

  // No mostrar el componente si no hay tabla.
  if (cantidadFilas === 0 || cantidadColumnas === 0) {
    return null
  }

  /**
   * Calcula el número de paso correspondiente
   * a una celda de la matriz.
   */
  const obtenerNumeroPaso = (fila, columna) => {
    if (fila === 0 || columna === 0) {
      return 0
    }

    return (fila - 1) * (cantidadColumnas - 1) + columna
  }

  /**
   * Obtiene los datos necesarios para explicar
   * el cálculo de la celda actual.
   */
  const obtenerExplicacion = () => {
    if (paso === 0 || totalPasos === 0) {
      return null
    }

    const capacidades = cantidadColumnas - 1

    const indiceFila =
      Math.floor((paso - 1) / capacidades) + 1

    const indiceColumna =
      ((paso - 1) % capacidades) + 1

    const pedido = pedidos[indiceFila - 1]

    if (!pedido) {
      return null
    }

    const peso = Number(pedido.peso)
    const beneficio = Number(pedido.beneficio)

    // Opción 1: no incluir el pedido.
    const sinPedido =
      tablaDP[indiceFila - 1][indiceColumna]

    // Verificar si el pedido cabe.
    const cabe = peso <= indiceColumna

    // Opción 2: incluir el pedido.
    const conPedido = cabe
      ? beneficio +
        tablaDP[indiceFila - 1][indiceColumna - peso]
      : null

    const mejorBeneficio =
      tablaDP[indiceFila][indiceColumna]

    return {
      nombre: pedido.nombre,
      peso,
      beneficio,
      capacidadActual: indiceColumna,
      sinPedido,
      conPedido,
      cabe,
      mejorBeneficio
    }
  }

  const explicacion = visualizacionDisponible
    ? obtenerExplicacion()
    : null

  /**
   * Controles manuales de la animación.
   */
  const siguientePaso = () => {
    setReproduciendo(false)

    setPaso((anterior) =>
      Math.min(anterior + 1, totalPasos)
    )
  }

  const pasoAnterior = () => {
    setReproduciendo(false)

    setPaso((anterior) =>
      Math.max(anterior - 1, 0)
    )
  }

  const reiniciar = () => {
    setReproduciendo(false)
    setPaso(0)
  }

  const reproducir = () => {
    if (paso >= totalPasos) {
      setPaso(0)
    }

    setReproduciendo(true)
  }

  const pausar = () => {
    setReproduciendo(false)
  }

  return (
    <div className="tabla-dp-contenedor">
      <h2>Visualización de Programación Dinámica</h2>

      <p>
        Observe cómo se construye la tabla de estados
        para encontrar el beneficio máximo.
      </p>

      {/* Mostrar advertencia si la tabla es muy grande */}
      {!visualizacionDisponible ? (
        <div className="tabla-dp-advertencia">
          <h3>Tabla demasiado grande para visualizar</h3>

          <p>
            La tabla contiene{' '}
            {totalCeldas.toLocaleString('es-CR')} celdas.
            Para mantener un buen rendimiento, la
            visualización completa está disponible
            hasta{' '}
            {limiteVisualizacion.toLocaleString('es-CR')}{' '}
            celdas.
          </p>

          <p>
            La optimización se ejecutó correctamente.
            Puede consultar los pedidos seleccionados,
            el peso total y el beneficio máximo
            en la sección de resultados.
          </p>
        </div>
      ) : (
        <>
          {/* Controles de reproducción */}
          <div className="tabla-dp-controles">
            <button
              onClick={reiniciar}
              disabled={paso === 0}
            >
              Reiniciar
            </button>

            <button
              onClick={pasoAnterior}
              disabled={paso === 0}
            >
              Anterior
            </button>

            <button
              onClick={siguientePaso}
              disabled={paso === totalPasos}
            >
              Siguiente
            </button>

            <button
              onClick={
                reproduccionActiva ? pausar : reproducir
              }
              disabled={totalPasos === 0}
            >
              {reproduccionActiva
                ? 'Pausar'
                : 'Reproducir'}
            </button>

            <label className="tabla-dp-velocidad">
              Velocidad:
              <select
                value={velocidad}
                onChange={(evento) =>
                  setVelocidad(Number(evento.target.value))
                }
              >
                <option value={700}>Lenta</option>
                <option value={300}>Normal</option>
                <option value={100}>Rápida</option>
              </select>
            </label>
          </div>

          {/* Contador de estados */}
          <p>
            <strong>Estado:</strong>{' '}
            {paso} de {totalPasos}
          </p>

          {/* Explicación del estado actual */}
          <div className="tabla-dp-explicacion">
            <h3>Explicación del estado actual</h3>

            {!explicacion ? (
              <p>
                Presione Siguiente o Reproducir
                para observar cómo el algoritmo
                construye la tabla.
              </p>
            ) : (
              <>
                <p>
                  <strong>Pedido analizado:</strong>{' '}
                  {explicacion.nombre}
                </p>

                <p>
                  <strong>Peso del pedido:</strong>{' '}
                  {explicacion.peso}
                  {' | '}
                  <strong>Beneficio:</strong>{' '}
                  {explicacion.beneficio}
                </p>

                <p>
                  <strong>Capacidad evaluada:</strong>{' '}
                  {explicacion.capacidadActual}
                </p>

                {!explicacion.cabe ? (
                  <p>
                    El pedido no cabe en la capacidad
                    evaluada. Se conserva el beneficio
                    anterior:{' '}
                    <strong>
                      {explicacion.sinPedido}
                    </strong>.
                  </p>
                ) : (
                  <>
                    <p>
                      <strong>
                        Sin incluir el pedido:
                      </strong>{' '}
                      {explicacion.sinPedido}
                    </p>

                    <p>
                      <strong>
                        Incluyendo el pedido:
                      </strong>{' '}
                      {explicacion.conPedido}
                    </p>

                    <p>
                      <strong>Decisión:</strong>{' '}
                      Se conserva el mayor beneficio
                      entre ambas opciones.
                    </p>
                  </>
                )}

                <p className="tabla-dp-decision">
                  Beneficio guardado en la celda:{' '}
                  <strong>
                    {explicacion.mejorBeneficio}
                  </strong>
                </p>
              </>
            )}
          </div>

          {/* Tabla de estados DP */}
          <div className="tabla-dp-scroll">
            <table className="tabla-dp">
              <thead>
                <tr>
                  <th>Pedido / Capacidad</th>

                  {tablaDP[0].map((_, columna) => (
                    <th key={columna}>
                      {columna}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tablaDP.map((fila, indiceFila) => (
                  <tr key={indiceFila}>
                    <th>
                      {indiceFila === 0
                        ? 'Inicial'
                        : pedidos[indiceFila - 1]?.nombre}
                    </th>

                    {fila.map((valor, indiceColumna) => {
                      const numeroPaso = obtenerNumeroPaso(
                        indiceFila,
                        indiceColumna
                      )

                      const visible =
                        numeroPaso <= paso

                      const actual =
                        numeroPaso === paso && paso > 0

                      return (
                        <td
                          key={indiceColumna}
                          className={
                            actual
                              ? 'dp-actual'
                              : visible
                                ? 'dp-completado'
                                : 'dp-pendiente'
                          }
                        >
                          {visible ? valor : '—'}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resultado final de la tabla */}
          {paso === totalPasos && (
            <p className="tabla-dp-final">
              Construcción finalizada.
              Beneficio máximo:{' '}
              <strong>
                {
                  tablaDP[cantidadFilas - 1][
                    cantidadColumnas - 1
                  ]
                }
              </strong>
            </p>
          )}
        </>
      )}
    </div>
  )
}

export default TablaDP
