/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting() {'Hello !'}
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting() {'Hello !'}
    }

    let pouic = document.getElementById('run');
    pouic.addEventListener('click', function (){
        let chat = new Cat('Poupouss');
        let chien= new Dog('Rex');
        console.log(chat.sayHello());
        console.log(chien.sayHello());
    })
})();
