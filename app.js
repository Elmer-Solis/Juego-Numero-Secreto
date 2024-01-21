// Variables
let intentos = 0;

const setHtml = (elemento, texto) => {
    const title = document.querySelector(elemento);
    title.innerHTML = texto;
};

const numeroAleatorio = () => Math.round(Math.random() * (10 - 1) + 1);

const intentoUsuario = () => {
    const input = Number(document.querySelector('input').value);
    intentos++;

    if (input === numeroSecreto) {
        const mensaje = (intentos > 1) ? 'Intentos' : 'Intento';
        setHtml('p', `Acertaste en ${intentos} ${mensaje} `);

        document.querySelector('#reiniciar').removeAttribute('disabled')

    } else {
        if (numeroSecreto > input) {
            setHtml('p', 'Ingresa un numero mayor');
        } else {
            setHtml('p', 'Ingresa un numero menor');
        }
        limpiarCaja();
    }
};

const reiniciarJuego = () => {
    limpiarCaja();
    estructuraInicial();

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

const limpiarCaja = () => {
    document.querySelector('input').value = '';
}

const estructuraInicial = () => {
    setHtml('h1', 'Juego del número secreto');
    setHtml('p', 'Ingresa un número del 1 al 10');
    numeroSecreto = numeroAleatorio();
    intentos = 0;
}

let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto);


estructuraInicial();

























// const info = document.querySelector('h1')
// info.innerText = 'hola mundo'

// const imagen = document.querySelector('img')
// imagen.src = './img/ia.png'

// info.style.fontFamily = 'Arial'

