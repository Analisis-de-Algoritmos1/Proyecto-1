/**
 ******* Descripcion **********
 * Construye la tabla de programación dinámica
 * utilizando el algoritmo de mochila 0/1.
 *
 ******* Entradas *********
 * @param {Array} pedidos - Lista de pedidos a analizar.
 * @param {number} capacidad - Capacidad máxima del vehículo.
 *
 ******* Retorno ********
 * @returns {Object} Tabla DP y cantidad de estados explorados.
 */
function construirTablaDP(pedidos, capacidad) {

    const cantPedidos = pedidos.length;

    // Contador de estados evaluados en la tabla
    let estadosExplorados = 0;

    // Crea la tabla con puros ceros
    const tablaDP = Array.from({ length: cantPedidos + 1 }, () => Array(capacidad + 1).fill(0));

    // Revisa cada pedido
    for (let pedidoActual = 1; pedidoActual <= cantPedidos; pedidoActual++) {

        const pedido = pedidos[pedidoActual - 1];
        const pesoPedido = pedido.peso;
        const beneficioPedido = pedido.beneficio;

        // Revisa cada capacidad posible del vehiculo
        for ( let capacidadActual = 1; capacidadActual <= capacidad; capacidadActual++ ) {

            // Cuenta cada estado evaluado de la tabla
            estadosExplorados++;

            if (pesoPedido <= capacidadActual) {

                // Opcion sin meter el pedido actual
                const beneficioSinPedido = tablaDP[pedidoActual - 1][capacidadActual];

                // Opcion metiendo el pedido actual
                const beneficioConPedido = beneficioPedido + tablaDP[pedidoActual - 1][capacidadActual - pesoPedido];

                // Guarda el beneficio mayor en la tabla
                tablaDP[pedidoActual][capacidadActual] =
                    Math.max(beneficioSinPedido, beneficioConPedido);

            } else {

                // Si no cabe, mantiene el beneficio anterior
                tablaDP[pedidoActual][capacidadActual] = tablaDP[pedidoActual - 1][capacidadActual];
            }
        }
    }

    return { tablaDP, estadosExplorados};
}


/**
 ******** Descripcion **********
 * Obtiene los pedidos seleccionados recorriendo
 * la tabla de programación dinámica.
 *
 ******** Entradas ********* 
 * @param {Array} pedidos - Lista de pedidos analizados.
 * @param {number} capacidad - Capacidad máxima del vehículo.
 * @param {Array} tablaDP - Tabla generada por programación dinámica.
 * 
 * 
 ******** Retorno ********
 * @returns {Array} Lista de pedidos seleccionados.
 */
function obtenerPedidosSeleccionados(pedidos, capacidad, tablaDP) {

    const pedidosSeleccionados = [];
    let capacidadRestante = capacidad;

    // Se devuelve del ultimo pedido al primero
    for (let pedidoActual = pedidos.length; pedidoActual > 0; pedidoActual--) {

        const pedido = pedidos[pedidoActual - 1];

        // Compara el beneficio actual con el de la fila anterior
        if ( tablaDP[pedidoActual][capacidadRestante] != tablaDP[pedidoActual - 1][capacidadRestante]) {

            // Guarda el pedido seleccionado
            pedidosSeleccionados.push(pedido);

            // Resta el peso del pedido a la capacidad restante
            capacidadRestante -= pedido.peso;
        }
    }

    // Coloca los pedidos seleccionados en su orden original
    pedidosSeleccionados.reverse();

    return pedidosSeleccionados;
}


/**
 * Nombre: optimizarCarga
 *
 * Descripcion:
 * Optimiza la selección de pedidos mediante programación dinámica.
 *
 * ******* Entradas *********
 * @param {Array} pedidos - Lista de pedidos a realizar/analizar.
 * @param {number} capacidad - Capacidad máxima del vehículo.
 *
 * ******* Retorno ********
 * @returns {Object} Resultado de la optimización.
 */
export function optimizarCarga(pedidos, capacidad) {

    // Guarda el tiempo en que inicia la ejecución del algoritmo
    const tiempoInicio = performance.now();

    const cantPedidos = pedidos.length;

    // Construye la tabla de programación dinámica
    const { tablaDP, estadosExplorados} = construirTablaDP(pedidos, capacidad);

    // Obtiene los pedidos que forman la solución
    const pedidosSeleccionados = obtenerPedidosSeleccionados(pedidos, capacidad, tablaDP);

    // Obtiene el beneficio máximo de la última celda de la tabla
    const beneficioTotal = tablaDP[cantPedidos][capacidad];

    // Calcula el peso total de los pedidos seleccionados
    let pesoTotal = 0;

    for (const pedido of pedidosSeleccionados) {
        pesoTotal += pedido.peso;
    }

    // Calcula el porcentaje de capacidad utilizada del vehiculo
    const porcentajeCapacidad = (pesoTotal / capacidad) * 100;

    // Guarda el tiempo en que termina la ejecución del algoritmo
    const tiempoFin = performance.now();

    // Calcula el tiempo total de ejecución en milisegundos
    const tiempoEjecucion = tiempoFin - tiempoInicio;
    
    // Guarda los pedidos que se procesaron 
    const pedidosProcesados = cantPedidos;

    // Guarda los pedidos seleccionados 
    const cantPedidosSeleccionados = pedidosSeleccionados.length;

    // Guarda los resultados de la optimización
    const resultado = {
        pedidosSeleccionados, 
        pesoTotal, 
        beneficioTotal,
        porcentajeCapacidad,
        tablaDP, 
        estadosExplorados, 
        tiempoEjecucion, 
        pedidosProcesados, 
        cantPedidosSeleccionados};


    return resultado;
}

