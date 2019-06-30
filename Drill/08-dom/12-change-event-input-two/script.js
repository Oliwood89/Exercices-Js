/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('pass-one').addEventListener('input', () => {
        let champ = document.getElementById('pass-one').value
        let total = champ.length;
        let valid = document.getElementById('validity');

        if (total >= 8) {
            let nombre = 0;
            for (i = 0; i < total; i++) {
                if (!isNaN(champ[i])) {
                    nombre++
                }
            }
            if (nombre >= 2) {
                if (total >= 8) {
                    valid.innerText = 'ok';
                } else {
                    valid.innerText = 'Pas ok';
                }
            } else {
                valid.innerText = 'Pas ok';
            }
        } else {
            valid.innerText = 'Pas ok';
        }
    })
})();
