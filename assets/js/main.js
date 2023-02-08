// Comienzo de juego
alert("Bienvenid@, comienza el juego.")
alert("Elige una opción.")

//Elección de opciones.
let jugador = Number(prompt("Elige 1. para piedra 🥌 - 2. para papel 📄 - 3. para tijeras ✂️."))
while ( jugador !== 1 || jugador !== 2 || jugador !== 3){
    alert("Elección erronea.")
    jugador = Number(prompt("Elige 1. para piedra 🥌 - 2. para papel 📄 - 3. para tijeras ✂️."))
}
    if (jugador === 1) {
        alert("Elejiste piedra 🥌")
    } else if (jugador === 2){
        alert("Elejiste papel 📄")
    } else if (jugador === 3){
        alert("Elejiste tijeras ✂️")
    }