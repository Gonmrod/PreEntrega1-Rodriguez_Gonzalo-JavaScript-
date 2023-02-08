// Comienzo de juego
alert("Bienvenid@, comienza el juego.");
alert("Elige una opción.");

// Función para ganador
function ganador(jugador, computadora){
    if ( jugador == computadora){
        alert("¡Empate!");
    } else if( jugador == 1 && computadora == 3){
        alert("¡Ganaste!")
    } else if( jugador == 2 && computadora == 1){
        alert("¡Ganaste!")
    } else if( jugador == 3 && computadora == 2){
        alert("¡Ganaste!")
    } else{
        alert("¡Perdiste! 😢")
    }
    
}

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

// Juego!!
ganador(jugador, computadora);
