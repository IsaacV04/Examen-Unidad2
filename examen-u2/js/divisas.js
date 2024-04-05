const cantidad = document.getElementById('amount');
const opcion1 = document.getElementById('from');
const opcion2 = document.getElementById('to');
const boton = document.getElementById('convert-btn');


// console.log(usd.textContent);


function opcionDe(opcion1) {
    const usd = document.getElementById('uno');
    const eur = document.getElementById('dos');
    const gbp = document.getElementById('tres');
    
    if(opcion1 === usd ) {
        console.log('Hola');
    } else {
        console.log('No hola');
    }
}

boton.addEventListener('click', () => {
    alert('hola')
    const cant = cantidad.value;
    console.log(cant);

    
})