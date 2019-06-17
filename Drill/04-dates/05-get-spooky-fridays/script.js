/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let go = document.getElementById("run");

    go.addEventListener("click", function (el) {
        let date = new Date(document.getElementById("year").value);
        let Day = date.getDay();
        let Month = date.getMonth();

        let endDate = new Date(date)
        endDate.setFullYear(endDate.getFullYear() + 1);

        while (date < endDate) {
            date.setDate(date.getDate() + 1)
            if (date.getDay() == 5 && date.getDate() == 13) {
                console.log(date);
            }
        }

    })
})();