// Variables
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;

// Funciones
const setHtml = (elemento, texto) => {
    const title = document.querySelector(elemento);
    title.innerHTML = texto;
};

const limpiarCaja = () => {
    document.querySelector('input').value = '';
}

const numeroAleatorio = () => {
    let numeroGenerado = Math.round(Math.random() * (numeroMaximo - 1) + 1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length === numeroMaximo) {
        setHtml('p', 'Ya se sortearon todos los numeros')
    } else {
        // si el numero generado esta incluido
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return numeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

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

const estructuraInicial = () => {
    setHtml('h1', 'Juego del número secreto');
    setHtml('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos = 0;
}

const reiniciarJuego = () => {
    limpiarCaja();
    estructuraInicial();

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

// Llamada a funciones
estructuraInicial();
























// const info = document.querySelector('h1')
// info.innerText = 'hola mundo'

// const imagen = document.querySelector('img')
// imagen.src = './img/ia.png'

// info.style.fontFamily = 'Arial'

