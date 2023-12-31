

const fuenteDeIngresos = {}

function obtenerFuente() {
  const fuente = prompt("Ingresa una fuente de ingreso (ej: oficina, emprendimiento, niñera): ")
  const cantidad = parseFloat(prompt("Ingresa la cantidad de dinero que ganaste con esta fuente de ingresos este mes: "))

  fuenteDeIngresos[fuente] = cantidad
}

while (true) {
  obtenerFuente()

  const sumarOtro = prompt("Queres agregar otra fuente de ingreso? (S/N)")
  if (sumarOtro === "N") {
    break
  }
}

const objCategoriasGastos = {}

function funcCategoraisGastos() {
  const categoria = prompt("Ingresa una categoría de gastos (ej: alquiler, comida): ")
  const cantidad = parseFloat(prompt("Ingresa la cantidad de dinero que esperas gastar en esta categoría: "))

  objCategoriasGastos[categoria] = cantidad
}

while (true) {
  funcCategoraisGastos()

  const sumarOtro = prompt("Deseas agregar otra categoría? (S/N)")
  if (sumarOtro === "N") {
    break
  }
}

let ingresoTotal = 0
let gastoTotal = 0

for (const [fuente, cantidad] of Object.entries(fuenteDeIngresos)) {
  ingresoTotal += cantidad
}

for (const [categoria, cantidad] of Object.entries(objCategoriasGastos)) {
  gastoTotal += cantidad
}

const balance = ingresoTotal - gastoTotal


function consoleCatGastos() {
  console.log("Gastos:")
  for (const [categoria, cantidad] of Object.entries(objCategoriasGastos)) {
    console.log(`Categoría: ${categoria}, Cantidad: ${cantidad}`)
  }
}

consoleCatGastos()

console.log(`Ingreso Total: ${ingresoTotal}`)
console.log(`Gasto Total: ${gastoTotal}`)
console.log(`Balance: ${balance}`)

if (balance > 0) {
  console.log("Genial! Estas dentro de tu presupuesto!")
} else if (balance === 0) {
  console.log("Has gastado exactamente lo que has ganado este mes.")
} else {
  console.log("Estás por encima del presupuesto!")
}