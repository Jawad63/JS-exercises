/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var questionOne = prompt("What's your age?", "");
    var questionTwo = prompt("What's your gender?", "");
    var questionThree = prompt("Where do you live?", "");

    var confirmation = alert(`so your age is ${questionOne}, you are a ${questionTwo} and you
    live in ${questionThree}`);

    var check =  confirm(`was the displayed info correct?`);

    if (check === true) {
        alert("thanks! :)");

    } else {
        var questionOne = prompt("What's your age?", "");
        var questionTwo = prompt("What's your gender?", "");
        var questionThree = prompt("Where do you live?", "");
    
        var confirmation = alert(`so your age is ${questionOne}, you are a ${questionTwo} and you
        live in ${questionThree}`);
    
        var check =  confirm(`was the displayed info correct?`);
    }
    

















})();
