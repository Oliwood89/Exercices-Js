let minChiffre = 20;
let maxChiffre = 80;
let tries = 10;
let coups = 0;
function random() {
    return(Math.round(Math.random() * (maxChiffre - minChiffre)) + minChiffre)
}
let prix = Math.round(Math.random() * (maxChiffre - minChiffre)) + minChiffre;
let choix;
while (choix != prix) {
    choix = prompt(`Veuillez entrer votre prix. Le prix à deviner est compris entre ` + minChiffre + ` et ` + maxChiffre);
    if (choix < minChiffre) {
        alert(choix + ` est trop petit !`);
        coups ++;
    } if (choix > maxChiffre) {
        alert(choix + ` est trop grand !`);
        coups ++;
    } if (choix < prix) {
        alert(`C'est plus grand !`);
        coups ++;
    } else if (choix > prix) {
        alert(`C'est plus petit !`);
        coups ++;
    } else {
        alert(`Bravo ! Le nombre à deviner était ` + prix + ` ! Tu as trouvé en ` + (coups+1) + ` coups !`);
    } if (coups == tries) {
        alert(`Perdu ! Tu n'avais que ` + tries + ` essais !`);
        break;
    }
}