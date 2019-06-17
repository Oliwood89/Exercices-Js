/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const run = document.getElementById('run');
    run.addEventListener('click', () => {
        let day = document.getElementById('dob-day').value;
        let month = document.getElementById('dob-month').value;
        let year = document.getElementById('dob-year').value;
        let date = new Date();
        let PresentYear = date.getFullYear();
        let PresentMonth = date.getMonth() + 1;
        let PresentDay = date.getDate();
        let age = 0;
        age = PresentYear - year;
        if (PresentMonth >= month) {
            if (PresentDay > day) {
                age--;
            }
        }
        console.log(`${age} ans`);
    })
})();