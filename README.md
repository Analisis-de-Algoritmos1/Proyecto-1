# Proyecto 1 - Ruteo y Planificación de Cargas

Proyecto desarrollado para el curso **IC-3002 Análisis de Algoritmos** del Tecnológico de Costa Rica.

## Descripción

Este proyecto consiste en una aplicación web para la planificación de cargas de un vehículo. La aplicación permite ingresar pedidos manualmente o generarlos de forma aleatoria, indicando su peso, beneficio y ubicación.

El objetivo es seleccionar la combinación de pedidos que genere el mayor beneficio posible sin superar la capacidad máxima del vehículo.

Para realizar la optimización se utiliza **Programación Dinámica**, específicamente el algoritmo de la **Mochila 0/1**.

## Funcionalidades

- Ingreso manual de pedidos.
- Generación aleatoria de pedidos.
- Configuración de la capacidad máxima del vehículo.
- Optimización de pedidos mediante Programación Dinámica.
- Visualización de pedidos disponibles y seleccionados.
- Visualización paso a paso de la tabla de Programación Dinámica.
- Visualización del porcentaje de capacidad utilizada.
- Cálculo del peso total de los pedidos seleccionados.
- Cálculo del beneficio total obtenido.
- Medición del tiempo de ejecución.
- Conteo de estados explorados.
- Validación de los datos ingresados.

## Algoritmo utilizado

Se utiliza el algoritmo de la **Mochila 0/1 mediante Programación Dinámica**.

Cada pedido puede ser seleccionado completamente o no ser seleccionado. El algoritmo construye una tabla donde analiza cada pedido con respecto a las diferentes capacidades disponibles y determina la combinación que produce el mayor beneficio sin superar la capacidad máxima.

La complejidad temporal del algoritmo es:

**O(nw)**

Donde:

- `n` = cantidad de pedidos.
- `w` = capacidad máxima del vehículo.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS

## Ejecución del proyecto

Para ejecutar el proyecto de forma local es necesario tener instalado Node.js.

Primero se deben instalar las dependencias:

```bash
npm install
```

Luego se inicia la aplicación:

```bash
npm run dev
```

Después se debe abrir en el navegador la dirección mostrada por Vite, normalmente:

```text
http://localhost:5173/
```

## Integrantes

- Selwyn Castro
- Koen Brayan
