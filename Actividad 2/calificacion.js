//Resolver el siguiente ejercicio: Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota

let calificacion = parseFloat(prompt("Podrias ingresar tu calificación : "));

if (calificacion >= 90){
    alert("Excelente calificación :D");
}else if (calificacion >= 75 && calificacion <= 89){
    alert("Te fue bien :D");
}else if (calificacion >= 60 && calificacion <= 74){
    alert("Suficiente para aprobar pero podria mejorar :/");
}else{
    alert("Lo siento estas reprobado ):")
} 