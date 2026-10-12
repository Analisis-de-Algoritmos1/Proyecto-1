
function Instrucciones() {
  return (
    <section className="seccion-instrucciones">
      <details>
        <summary>Instrucciones de uso</summary>

        <div className="contenido-instrucciones">
          <h3>¿Cómo utilizar el sistema?</h3>

          <ol>
            <li>
              <strong>Registrar pedidos:</strong> Ingrese manualmente
              el nombre, peso, beneficio y coordenadas de cada pedido.
            </li>

            <li>
              <strong>Generar pedidos:</strong> Indique una cantidad
              y presione "Generar pedidos" para crear pedidos con datos aleatorios.
            </li>

            <li>
              <strong>Configurar capacidad:</strong> Introduzca el
              peso máximo en kilogramos que puede transportar
              el vehículo.
            </li>

            <li>
              <strong>Revisar pedidos:</strong> Consulte la tabla
              para verificar la información registrada.
            </li>

            <li>
              <strong>Eliminar pedidos:</strong> Utilice el botón
              "Eliminar" para quitar un pedido o "Limpiar todos"
              para comenzar una nueva lista.
            </li>

            <li>
              <strong>Ejecutar optimización:</strong> Presione el
              botón correspondiente para procesar los pedidos.
            </li>

            <li>
              <strong>Consultar resultados:</strong> Revisa los
              pedidos seleccionados, el peso, el beneficio total
              y las estadísticas de ejecución.
            </li>
          </ol>

          <p>
            <strong>Nota:</strong> Los pesos y la capacidad deben
            ser números enteros positivos para ejecutar la
            implementación actual.
          </p>
        </div>
      </details>
    </section>
  )
}

export default Instrucciones

/* usamos <details> y <summary> para crear una sección colapsable con instrucciones */