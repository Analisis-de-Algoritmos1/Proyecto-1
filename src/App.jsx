
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


function App() {
  const [pedidos, setPedidos] = useState([])
  const [siguienteNumero, setSiguienteNumero] = useState(1)
  const [capacidad, setCapacidad] = useState('100')
  const [resultado, setResultado] = useState(null)

  
const ejecutarOptimizacion = () => {
  const capacidadNumero = Number(capacidad)

  if (pedidos.length === 0) {
    alert('Primero debe registrar al menos un pedido.')
    return
  }

  if (
    capacidad.trim() === '' ||
    !Number.isSafeInteger(capacidadNumero) ||
    capacidadNumero <= 0
  ) {
    alert('Ingrese una capacidad entera mayor que cero.')
    return
  }

  if (
    pedidos.some(
      (pedido) =>
        !Number.isSafeInteger(pedido.peso) ||
        pedido.peso <= 0 ||
        !Number.isFinite(pedido.beneficio) ||
        pedido.beneficio <= 0
    )
  ) {
    alert(
      'Los pedidos deben tener pesos enteros positivos y beneficios válidos.'
    )
    return
  }

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
  const nuevosPedidos = generarPedidos(cantidad, siguienteNumero)

  setPedidos((anteriores) => [...anteriores, ...nuevosPedidos])
  setSiguienteNumero((anterior) => anterior + cantidad)
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
        <PedidoList pedidos={pedidos} />
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
