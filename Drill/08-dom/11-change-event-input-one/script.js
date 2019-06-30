/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let champ = document.getElementById('pass-one')
    let chiffres = document.getElementById('counter')
    
    let pouic = document.getElementById('pass-one')
    pouic.addEventListener('input', function () {
        for (i = 0; i < 10; i++) {
            chiffres.innerHTML = champ.value.length+"/10";
        }
        if (champ.value.length > 9) {
            champ.disabled = true;
        }
    })
})();
