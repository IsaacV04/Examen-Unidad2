const meGusta = document.getElementById('button');
const tapImg = document.getElementById("img");
const contador = document.getElementById('contador');
const publicar = document.getElementById('add-comment-btn');
const comentariosInput = document.querySelector('.comment-input');

meGusta.addEventListener('click', () => {
    console.log('Click en el boton');
    const likes = parseInt(contador.textContent);

    if (meGusta.textContent === 'Me gusta') {
        contador.textContent = likes + 1;
        meGusta.textContent = 'No me gusta';
    } else {
        contador.textContent = likes - 1;
        meGusta.textContent = 'Me gusta';
    }
})

const comentarios = document.querySelector('.comments-container');
console.log(comentarios.textContent);


tapImg.addEventListener("dblclick", function() {
    console.log('Doble click en la imagen');
    
    const likes = parseInt(contador.textContent);

    if (meGusta.textContent === 'Me gusta') {
        contador.textContent = likes + 1;
        meGusta.textContent = 'No me gusta';
    } else {
        contador.textContent = likes - 1;
        meGusta.textContent = 'Me gusta';
    }
});

publicar.addEventListener('click', () => {

    const comentario = comentariosInput.value;

    saveComents(comentario);
    document.getElementById('commets').reset(); 
    console.log('comentario subido', comentario);
})

function saveComents(comentario) {
    const coments = getComents();
    localStorage.setItem('comentario', JSON.stringify(comentario));
}


function getComents() {
    const coments = JSON.parse(localStorage.getItem('comentario')) || [];
    return coments;
}

window.onload = function() {
    const comentariosSubidos = getComents();
    if(comentariosSubidos.length > 0) {
        console.log('Comentarios subidos: ', comentariosSubidos);
    } else {
        console.log('No hay comentarios subidos');
    }
}

