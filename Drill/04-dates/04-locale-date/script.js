/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let doc = document.querySelector("target")

    let days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let months = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    let date = new Date();


    function heure() {
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        if (minutes < 10)
            minutes = "0" + minutes;
        return hour + "h" + minutes;
    }

    let message = days[date.getDay()] + " "; // nom du jour
    message += date.getDate() + " "; // numero du jour
    message += months[date.getMonth()] + " "; // mois
    message += date.getFullYear(); + " ";


    target.innerHTML = message + " " + heure();
})();