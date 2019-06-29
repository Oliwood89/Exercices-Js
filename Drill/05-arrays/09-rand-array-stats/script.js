/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let pouic = document.getElementById('run');

    pouic.addEventListener('click', function () {

        let NewTab = []; 

        for (i = 0; i <= 10; i++) {
            let rand = Math.floor(Math.random()*99+1);
            NewTab.push(rand);
        }
        console.log(NewTab);

        let ch1 = document.getElementById("n-1").innerHTML = NewTab[0];
        let ch2 = document.getElementById("n-2").innerHTML = NewTab[1];
        let ch3 = document.getElementById("n-3").innerHTML = NewTab[2];
        let ch4 = document.getElementById("n-4").innerHTML = NewTab[3];
        let ch5 = document.getElementById("n-5").innerHTML = NewTab[4];
        let ch6 = document.getElementById("n-6").innerHTML = NewTab[5];
        let ch7 = document.getElementById("n-7").innerHTML = NewTab[6];
        let ch8 = document.getElementById("n-8").innerHTML = NewTab[7];
        let ch9 = document.getElementById("n-9").innerHTML = NewTab[8];
        let ch10 = document.getElementById("n-10").innerHTML = NewTab[9];

        let mini = Math.min(...NewTab);
        document.getElementById("min").innerHTML = min;

        let maxi = Math.max(...NewTab);
        document.getElementById("max").innerHTML = max;

        let tot = NewTab.reduce((a,b) => a+b,0);
        document.getElementById("sum").innerHTML = tot;

        document.getElementById("average").innerHTML = tot / 10;

        console.log(mini);
        console.log(maxi);
        console.log(sum);
        console.log(average);
    })
})();
