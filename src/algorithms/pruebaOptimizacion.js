// funcion encargada de realizar la prueba de optimizacion de pedidos
// compramos a ver si los botones de ejecutar optimizacion y generar pedidos funcionan correctamente

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
