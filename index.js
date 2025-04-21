// Función para calcular el factorial de un número
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

// Función para validar y procesar la entrada del usuario
function procesarEntrada() {
    let numeroValido = false;
    let numero;
    
    while (!numeroValido) {
        let entrada = prompt("Ingrese un número para calcular su factorial:");
        
        // Convertir la entrada a número
        numero = Number(entrada);
        
        // Validar que sea un número válido y no negativo
        if (!isNaN(numero) && numero >= 0 && entrada !== "" && entrada !== null) {
            numeroValido = true;
        } else {
            alert("Error: Debe ingresar un número válido no negativo. Intente nuevamente.");
        }
    }
    
    // Calcular el factorial
    const resultado = calcularFactorial(numero);
    
    // Mostrar el resultado en la consola
    console.log(`El factorial de ${numero} es: ${resultado}`);
    
    // Mostrar el resultado en el DOM
    const resultadoElemento = document.getElementById('resultado');
    if (resultadoElemento) {
        resultadoElemento.textContent = `El factorial de ${numero} es: ${resultado}`;
    }
}

// Ejecutar el programa
procesarEntrada();