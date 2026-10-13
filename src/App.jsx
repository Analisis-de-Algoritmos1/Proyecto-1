
import { useState } from 'react'
import PedidoForm from './components/PedidoForm'
import GeneradorPedidos from './components/GeneradorPedidos'
import PedidoList from './components/PedidoList'
import { generarPedidos } from './utils/generarPedidos'
import './App.css'
import CapacidadForm from './components/CapacidadForm'
import Resultados from './components/Resultados'
import EjecutarAlgoritmo from './components/EjecutarAlgoritmo'
import { pruebaOptimizacion } from './algorithms/pruebaOptimizacion'
import Instrucciones from './components/Instrucciones'


function App() {
  const [pedidos, setPedidos] = useState([])
  const [siguienteNumero, setSiguienteNumero] = useState(1)
  const [capacidad, setCapacidad] = useState('100')
  const [resultado, setResultado] = useState(null)

  

const ejecutarOptimizacion = () => {
  const capacidadNumero = Number(capacidad)

  // Verificar que existan pedidos
  if (pedidos.length === 0) {
    alert('Primero debe registrar al menos un pedido.')
    return
  }

  // Validar capacidad del vehículo
  if (
    String(capacidad).trim() === '' ||
    !Number.isSafeInteger(capacidadNumero) ||
    capacidadNumero <= 0
  ) {
    alert('La capacidad debe ser un número entero mayor que cero.')
    return
  }

  // Validar información de cada pedido
  const pedidosInvalidos = pedidos.some((pedido) => {
    return (
      !pedido.nombre?.trim() ||
      !Number.isSafeInteger(pedido.peso) ||
      pedido.peso <= 0 ||
      !Number.isSafeInteger(pedido.beneficio) ||
      pedido.beneficio <= 0 ||
      !Number.isFinite(pedido.x) ||
      !Number.isFinite(pedido.y)
    )
  })

  if (pedidosInvalidos) {
    alert(
      'Revise los pedidos: nombre, peso, beneficio y coordenadas deben ser válidos.'
    )
    return
  }

  // Ejecutar función temporal
  const nuevoResultado = pruebaOptimizacion(
    pedidos,
    capacidadNumero
  )

  setResultado(nuevoResultado)
}

  // Agregar pedidos manualmente
  
const agregarPedido = (nuevoPedido) => {
  setPedidos((anteriores) => [...anteriores, nuevoPedido])
  setResultado(null)
}

const agregarPedidos = (cantidad) => {
  if (pedidos.length + cantidad > 100) {
    alert(
      `El límite total es de 100 pedidos. Actualmente tiene ${pedidos.length}.`
    )
    return
  }

  const nuevosPedidos = generarPedidos(cantidad, siguienteNumero)

  setPedidos((anteriores) => [...anteriores, ...nuevosPedidos])
  setSiguienteNumero((anterior) => anterior + cantidad)
  setResultado(null)
}


const eliminarPedido = (id) => {
  setPedidos((anteriores) =>
    anteriores.filter((pedido) => pedido.id !== id)
  )

  setResultado(null)
}

const limpiarPedidos = () => {
  const confirmar = window.confirm(
    '¿Está seguro de que desea eliminar todos los pedidos?'
  )

  if (!confirmar) return
  // Limpiar todos los pedidos
  setPedidos([])
  // Reiniciar el siguiente número de pedido a 1
  setSiguienteNumero(1)
  // Limpiar resultado anteriores
  setResultado(null)
}

  return (
    <main className="contenedor">
      <header>
        <h1>Proyecto 1 - Análisis de Algoritmos</h1>
        <h2>Ruteo y Planificación de Cargas</h2>

        <p>
          Sistema de optimización de pedidos mediante
          Programación Dinámica.
        </p>
      </header>

      <Instrucciones />

        <section>
          <PedidoForm agregarPedido={agregarPedido} />
        </section>

      <section className="seccion-generador">
        <GeneradorPedidos agregarPedidos={agregarPedidos} />
      </section>

      <section className="seccion-capacidad">
        
      <CapacidadForm
        capacidad={capacidad}
        setCapacidad={(nuevaCapacidad) => {
          setCapacidad(nuevaCapacidad)
          setResultado(null)
        }}
      />
      </section>

      <section className="seccion-pedidos">
        <PedidoList
          pedidos={pedidos}
          eliminarPedido={eliminarPedido}
          limpiarPedidos={limpiarPedidos}
          capacidad={capacidad}
        />
      </section>

      <section className="seccion-ejecutar">
        <EjecutarAlgoritmo
          ejecutar={ejecutarOptimizacion}
          deshabilitado={pedidos.length === 0}
        />
      </section>
      
      <section className="seccion-resultados">
        <Resultados
          resultado={resultado}
          capacidad={capacidad}
        />
      </section>
    </main>

  )
}

export default App
