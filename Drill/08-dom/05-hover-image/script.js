/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let img1 = document.querySelector('img');
    let imgsrc = img1.getAttribute('src');
    let img2 = img1.getAttribute('data-hover');

    img1.addEventListener('mouseover', function () {

        img1.src = img2;
    })

    img1.addEventListener('mouseout', function () {

        img1.src = imgsrc;
    })
})();
