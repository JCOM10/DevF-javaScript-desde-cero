//Problema: Clasificación de Frutas:Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

// 1. Declarar un arreglo con varios tipos de frutas
let frutas = ['manzana', 'naranja', 'plátano', 'almendra', 'naranja', 'piña', 'nuez'];

// 2. Crear un objeto para almacenar la cantidad de cada tipo de fruta
let tiposFrutas = {
  citricas: 0,
  exoticas: 0,
  secos: 0
};

// 3. Usa un ciclo for para recorrer el arreglo y clasificar las frutas
for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];
  
  // Clasifica según el tipo de fruta
  if (['naranja', 'limón', 'mandarina'].includes(fruta)) {
    tiposFrutas.citricas++;
  } else if (['piña', 'mango', 'plátano'].includes(fruta)) {
    tiposFrutas.exoticas++;
  } else if (['nuez', 'almendra'].includes(fruta)) {
    tiposFrutas.secos++;
  }
}


console.log("Clasificación usando for:");
console.log(tiposFrutas);
