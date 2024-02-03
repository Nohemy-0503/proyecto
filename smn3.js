function calcularVelocidad() {
    var distancia = document.getElementById("distancia1").value;
    var tiempo = document.getElementById("tiempo1").value;

    tiempo *= 60; 

    var velocidad = distancia / tiempo;

    document.getElementById("resultado1").innerHTML = "La velocidad es: " + velocidad.toFixed(2) + " m/s";
}

function clasificarTriangulo() {
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var lado3 = document.getElementById("lado3").value;

    var resultado = document.getElementById("resultado2");

    if (lado1 == lado2 && lado2 == lado3) {
        resultado.innerHTML = "El triángulo es equilátero.";
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        resultado.innerHTML = "El triángulo es isósceles.";
    } else {
        resultado.innerHTML = "El triángulo es escaleno.";
    }
}

function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operacion = document.getElementById("operacion").value;

    var resultado = document.getElementById("resultado3");

    switch (operacion) {
        case '+':
            resultado.innerHTML = "Resultado: " + (parseFloat(num1) + parseFloat(num2));
            break;
        case '-':
            resultado.innerHTML = "Resultado: " + (parseFloat(num1) - parseFloat(num2));
            break;
        case '*':
            resultado.innerHTML = "Resultado: " + (parseFloat(num1) * parseFloat(num2));
            break;
        case '/':
            if (parseFloat(num2) !== 0) {
                resultado.innerHTML = "Resultado: " + (parseFloat(num1) / parseFloat(num2));
            } else {
                resultado.innerHTML = "Error: División por cero.";
            }
            break;
        default:
            resultado.innerHTML = "Operación no válida.";
    }
}

function verificarPrimo() {
    var numero = document.getElementById("numeroPrimo").value;
    var resultado = document.getElementById("resultado4");

    if (esPrimo(parseInt(numero))) {
        resultado.innerHTML = numero + " es un número primo.";
    } else {
        resultado.innerHTML = numero + " no es un número primo.";
    }
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return true;
    }
}