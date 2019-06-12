/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        let number1 = parseInt(document.getElementById("op-one").value); // perform an addition
        let number2 = parseInt(document.getElementById("op-two").value);
        alert(number1+number2);
        });

    document.getElementById("substraction").addEventListener("click", () => {
        let number1 = parseInt(document.getElementById("op-one").value); // perform a substraction
        let number2 = parseInt(document.getElementById("op-two").value);
        alert(number1-number2);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let number1 = parseInt(document.getElementById("op-one").value); // perform a multiplication
        let number2 = parseInt(document.getElementById("op-two").value);
        alert(number1*number2);
    });

    document.getElementById("division").addEventListener("click", () => {
        let number1 = parseInt(document.getElementById("op-one").value); // perform a division
        let number2 = parseInt(document.getElementById("op-two").value);
        alert(number1/number2);
    });
})();
