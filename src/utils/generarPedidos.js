//generador de pedidos
//esta función genera un pedido aleatorio con los datos necesarios para el registro del pedido
//Math.random() genera numero aleatorios
//Math.floor() redondea hacia abajo


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
