/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function formu() {
    let age = prompt("Quel est votre âge ?");
    let sexe = prompt("Quel est votre sexe ?");
    let ville = prompt("Quel est votre ville ?");
        window.alert(`${age} \n ${sexe} \n ${ville}`)
    let fin = confirm("Validez-vous ces choix ? Oui / Non");
    if(fin === true) {
        alert("Merci.")
    }
    if(fin === false) {
        formu()
    }
} formu()
    // your code here
})();