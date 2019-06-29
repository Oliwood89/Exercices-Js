/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + " " + this.lastname;
        }
        set name (name) {
            name = name.split(' ');
            this.firstname = name[0];
            this.lastname = name[1];
        }
    }

    let pouic = document.getElementById('run');
    pouic.addEventListener('click', function () {

        let Someone = new Person("Robert", "Patate");
        console.log(Someone.name);
        Someone.name = 'Jack Daniels';
        console.log(Someone.name);
    })
})();
