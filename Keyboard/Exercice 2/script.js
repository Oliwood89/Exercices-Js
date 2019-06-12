let up1  = document.getElementById("up");
let down1  = document.getElementById("down");
let left1  = document.getElementById("left");
let right1  = document.getElementById("right");

window.addEventListener('keydown', event); // Crée la fonction event juste après.

function event (a){ // Création de la fonction + EVENT.
    console.log(a.key); // Permet d'afficher les Event touches pressées dans la console.

    switch (a.key) { // Interaction conditions touches.
        case 'ArrowUp':
            up1.classList.add("highlight");
            break;
        case 'ArrowDown':
            down1.classList.add("highlight");
            break;
        case 'ArrowLeft':
            left1.classList.add("highlight");
            break;
        case 'ArrowRight':
            right1.classList.add("highlight");
            break;
    }
}

window.addEventListener('keyup', event2); // Crée la fonction event juste après.

function event2 (a){ // Création de la fonction + EVENT.
    console.log(a.key); // Permet d'afficher les Event touches pressées dans la console.

    switch (a.key) { // Interaction conditions touches.
        case 'ArrowUp':
            up1.classList.remove("highlight");
            break;
        case 'ArrowDown':
            down1.classList.remove("highlight");
            break;
        case 'ArrowLeft':
            left1.classList.remove("highlight");
            break;
        case 'ArrowRight':
            right1.classList.remove("highlight");
            break;
    }
}