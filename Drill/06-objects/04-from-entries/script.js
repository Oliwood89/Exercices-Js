/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    let pouic = document.getElementById('run');
    pouic.addEventListener('click', function () {

        let objs = [];
        for(let i=0; i < keys.length; i++) {
            let prop = [];
            prop.push(keys[i]);
            prop.push(values[i]);
            objs.push(prop);
        }
        let finalobj = Object.fromEntries(objs);
        console.log(finalobj);
    })
})();
