/**
 * Función: Realiza una selección temporal de pedidos,
 * recorriendo la lista y agregando aquellos que no
 * superan la capacidad disponible del vehículo.
 *
 * Entradas: Lista de pedidos registrados y capacidad
 * máxima del vehículo.
 *
 * Salidas: Pedidos seleccionados, cantidad procesada,
 * peso acumulado, beneficio total, tiempo de ejecución
 * y número de operaciones realizadas.
 *
 * Nota: Esta función es temporal y no garantiza el
 * beneficio máximo. Será reemplazada por el algoritmo
 * de Programación Dinámica de Mochila 0/1.
 */

export function pruebaOptimizacion(pedidos, capacidad) {
  const inicio = performance.now()

  const seleccionados = []
  let pesoTotal = 0
  let beneficioTotal = 0
  let operaciones = 0

  for (const pedido of pedidos) {
    operaciones++

    if (pesoTotal + pedido.peso <= capacidad) {
      seleccionados.push(pedido)
      pesoTotal += pedido.peso
      beneficioTotal += pedido.beneficio
    }
  }

  const tiempoMs = performance.now() - inicio

  return {
    pedidosSeleccionados: seleccionados,
    totalProcesados: pedidos.length,
    pesoTotal,
    beneficioTotal,
    tiempoMs,
    operaciones
  }
}
