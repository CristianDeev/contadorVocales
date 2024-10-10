let frase = prompt("Por favor ingresa una frase: ");

let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]; 
let contadorVocales = 0;
let arregloVocales = [];

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];
    
    if (vocales.includes(letra)) {
        contadorVocales++;
        arregloVocales.push(letra);  
    }
}
alert("la frase que escribiste contiene " + contadorVocales + " Vocales y las vocales que contiene son: " + arregloVocales)

