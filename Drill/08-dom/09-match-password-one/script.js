/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let passone = document.getElementById('pass-one');
    let passtwo = document.getElementById('pass-two');

    let pouic = document.getElementById('run');
    pouic.addEventListener('click', function () {

        if (passone.value === passtwo.value) {
            alert("Les deux mots de passe sont identiques");
        }
        else {
            passone.style.border = "solid red";
            passtwo.style.border = "solid red";
        }
    })
})();
