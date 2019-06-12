let resultat;

let score = prompt(`Quel est votre score ?`); 
if (score >= 90) {
    alert (`Vous avez le rang A`);
} else if (score > 50) {
    alert (`Vous avez le rang B`);
} else if (score <= 50) {
    alert (`Vous avez le rang C`);
}