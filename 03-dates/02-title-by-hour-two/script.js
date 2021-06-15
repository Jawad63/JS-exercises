/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var time = new Date();
    if (time.getHours() < 62280) { // indicates if current time is less than 17:30 then it should print out hello :)
        document.getElementById("target").innerHTML = "hello! :)";
    } 