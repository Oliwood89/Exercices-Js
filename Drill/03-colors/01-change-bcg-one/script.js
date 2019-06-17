/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let col1  = document.getElementById("red");
    let col2  = document.getElementById("green");
    let col3  = document.getElementById("yellow");
    let col4  = document.getElementById("blue");

    col1.addEventListener("click", () => document.body.style.backgroundColor = "red");
    col2.addEventListener("click", () => document.body.style.backgroundColor = "green");
    col3.addEventListener("click", () => document.body.style.backgroundColor = "yellow");
    col4.addEventListener("click", () => document.body.style.backgroundColor = "blue");
})();
