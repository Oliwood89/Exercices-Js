/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let btn = document.getElementById('run');
    let bgc = document.body.style.backgroundColor;
    btn.addEventListener('click', () => {
        switch (getRandomInt(1, 5)) {
            case 1:
                document.body.style.backgroundColor = "green";
                break;
            case 2:
                document.body.style.backgroundColor = "blue";
                break;
            case 3:
                document.body.style.backgroundColor = "black";
                break;
            case 4:
                document.body.style.backgroundColor = "lightblue";
                break;
            case 5:
                document.body.style.backgroundColor = "red";
                break;
            default:
                break;
        }
    })
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();
