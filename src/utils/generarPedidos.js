/**
 * Función: Genera pedidos con identificadores únicos y valores
 * aleatorios de peso, beneficio y coordenadas, manteniendo
 * una numeración consecutiva.
 *
 * Entradas: Cantidad de pedidos y número inicial de la secuencia.
 *
 * Salidas: Arreglo de objetos que contiene todos los
 * pedidos generados.
 */

export function generarPedidos(cantidad, numeroInicial = 1) {
  const pedidos = []

  for (let i = 0; i < cantidad; i++) {
    const numeroPedido = numeroInicial + i

    const pedido = {
      id: crypto.randomUUID(),
      nombre: `Pedido ${numeroPedido}`,
      peso: Math.floor(Math.random() * 20) + 1,
      beneficio: Math.floor(Math.random() * 200) + 1,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    }

    pedidos.push(pedido)
  }

  return pedidos
}
