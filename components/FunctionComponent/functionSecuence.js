export class SerieCalculadora {
    static triangular(n) {
        // Se utiliza la formula
        return (n * (n + 1)) / 2;
    }

    static primo(n) {
        function esPrimo(n) {
            // Contador de factores. Los numeros primos solo tienen 2, ya que son divisibles entre ellos mismos y el 1 
            let numFactores = 0;

            for (let i = 1; i <= n; i++) {
                // Obtenemos el modulo (residuo de dividir n entre el iterador)
                if (n % i === 0) {
                    // Por cada ocasion que el residuo sea cero vamos a sumar un factor
                    numFactores = numFactores + 1;
                }
            }
            // Si el numero total de factores es dos, entonces es un numero primo 
            if (numFactores === 2) {
                return 'si';
            } else {
                return 'no';
            }
        }

        // Inicializamos el conteo de numeros primos 
        let numPrimos = 0;

        // Comenzamos por el numero cero 
        let j = 0;

        // Mientras la cantidad de numeros primos sea menor a 'n' entonces se va sumando cada caso hasta llegar al n-enésimo numero primo
        while (numPrimos < n) {
            if (esPrimo(j) === 'si') {
                numPrimos = numPrimos + 1;
            }
            //Se va comprobando que cada numero sea primo o no sumando de uno en uno 
            j = j + 1;
        }
        return j - 1;
    }

    static fibonacci(n) {
        if (n <= 1) return n;

        let a = 0;
        let b = 1;
        // El bucle calcula los números de Fibonacci desde el tercer número en adelante, 
        // ya que los dos primeros números ya se han manejado como casos base.
        for (let i = 2; i <= n; i++) {

            // En cada iteración del bucle, se calcula la suma de a y b 
            // y se almacena en una variable temporal temp. 
            // Esto representa el siguiente número en la secuencia de Fibonacci.
            const temp = a + b;
            a = b;
            b = temp;
        }

        return b;
    }

    static calcularTermino(n) {
        const terminoTriangular = SerieCalculadora.triangular(n - 1);

        const terminoPrimo = SerieCalculadora.primo(n - 1);

        const terminoFibonacci = SerieCalculadora.fibonacci(n + 2);

        return 4 * terminoTriangular - 2 * terminoPrimo + terminoFibonacci;
    }
}

// Ejemplo de uso:
// const n = 5; // Cambia n por el valor deseado.
// const termino = SerieCalculadora.calcularTermino(n);
// console.log(`El término ${n} de la serie es: ${termino}`);