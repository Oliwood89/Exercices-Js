/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = document.getElementById('target');
    let tableau = document.createElement('table');
    
    for (a = 1; a <= 10; a++) {
        let tr = document.createElement('tr');

        for (b = 1; b <= 10; b++) {
            let td = document.createElement('td');

            td.innerHTML = a * b ;

            target.append(tableau);
        tableau.append(tr);
        tr.append(td);
        }
    }
})();
