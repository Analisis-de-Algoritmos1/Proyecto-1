/**
 * Convierte la primera letra de cada palabra a mayúscula.
 *
 * Entrada: Nombre del pedido.
 * Salida: Nombre formateado.
 */
export function formatearNombre(nombre) {
  return String(nombre ?? '')
    .toLocaleLowerCase('es')
    .replace(
      /(^|[\s-])(\p{L})/gu,
      (_, separador, letra) => separador + letra.toLocaleUpperCase('es')
    )
}