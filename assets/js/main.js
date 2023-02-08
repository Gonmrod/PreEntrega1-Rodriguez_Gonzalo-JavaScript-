// Comienzo de juego
alert("Bienvenid@, comienza el juego.");
alert("Elige una opción.");



//Elección de opciones.
let jugador = Number(prompt("Elige 1. para piedra 🥌 - 2. para papel 📄 - 3. para tijeras ✂️."));

while (jugador !== 1 && jugador !== 2 && jugador !== 3){

    alert("Elección erronea.");

    jugador = Number(prompt("Elige 1. para piedra 🥌 - 2. para papel 📄 - 3. para tijeras ✂️."));
}
    if (jugador === 1) {
        alert("Elejiste piedra 🥌");
    } else if (jugador === 2){
        alert("Elejiste papel 📄");
    } else if (jugador === 3){
        alert("Elejiste tijeras ✂️");
    }

// Elección aleatoria de computadora
function pcAleatoria(min, max){
    return Math.floor( Math.random() * (max - min) + min);
}

let computadora = pcAleatoria(1, 3);
    if (computadora === 1) {
        alert("La computadora eligió piedra 🥌");
    } else if (computadora === 2){
        alert("La computadora eligió papel 📄");
    } else if (computadora === 3){
        alert("La computadora eligió tijeras ✂️");
    }

// Función para ganador
function ganador(jugador, computadora){
    if ( jugador == computadora){
        alert("¡Empate! 🙃");
        empates = empates + 1;
    } else if( jugador == 1 && computadora == 3){
        alert("¡Ganaste! 🥳")
        victorias = victorias + 1;
    } else if( jugador == 2 && computadora == 1){
        alert("¡Ganaste! 🥳")
        victorias = victorias + 1;
    } else if( jugador == 3 && computadora == 2){
        alert("¡Ganaste! 🥳")
        victorias = victorias + 1;
    } else{
        alert("¡Perdiste! 😢")
        derrotas = derrotas + 1;
    }
    
}
// Mostrar resultados
function mostrarResultados(){
    alert("Acumulaste " + victorias + " victorias, " + empates + " empates y " + derrotas + " derrotas.");
    if (victorias == 2){
        alert("Felicitaciones sos el ganador.");
        resetearResultados();
    } else if (derrotas == 2){
        alert("Lo lamento eres el perdedor.");
        resetearResultados();
    }
}
// Resetear resultados
    function resetearResultados(){
        victorias = 0;
        empates = 0;
        derrotas = 0;
    }
// Juego!!
let victorias = 0;
let empates = 0;
let derrotas = 0;

while (victorias < 2 && derrotas < 2){
    jugador = Number(prompt("Elige 1. para piedra 🥌 - 2. para papel 📄 - 3. para tijeras ✂️."));
    computadora = pcAleatoria(1, 3);
        if (computadora === 1) {
            alert("La computadora eligió piedra 🥌");
        } else if (computadora === 2){
            alert("La computadora eligió papel 📄");
        } else if (computadora === 3){
            alert("La computadora eligió tijeras ✂️");
        }
    ganador(jugador, computadora);
}

mostrarResultados();

