const cantidad = document.getElementById('amount');
const opcionDe = document.getElementById('from');
const opcionA = document.getElementById('to');
const boton = document.getElementById('convert-btn');

function obtenerTasaDeCambio(opcionDe, opcionA) {
    const tasasDeCambio = {
        usd: { usd: 1, eur: 0.92, gbp: 0.79 },
        eur: { usd: 1.08, eur: 1, gbp: 0.86 },
        gbp: { usd: 1.26, eur: 1.17, gbp: 1 }
    };

    return tasasDeCambio[opcionDe][opcionA];
}

function mostrarResultado(resultado) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = `Resultado: ${resultado}`;
}

function mostrarError(mensaje) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.textContent = mensaje;
}

boton.addEventListener('click', () => {
    const cantidadValor = parseFloat(cantidad.value);

    const opcionDeValor = opcionDe.value;
    const opcionAValor = opcionA.value;

    const tasaDeCambio = obtenerTasaDeCambio(opcionDeValor, opcionAValor);

    if (!isNaN(cantidadValor) && tasaDeCambio !== null) {
        const resultado = cantidadValor * tasaDeCambio;
        mostrarResultado(resultado.toFixed(2));
    } else {
        mostrarError("Por favor, ingrese una cantidad válida y seleccione monedas diferentes.");
    }
});