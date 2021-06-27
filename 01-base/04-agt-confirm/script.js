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

    function runProcess() {
        let age = prompt("whats your age?", "");
        let gender = prompt("what's your gender?", "");
        let town = prompt("where u from", "");
    
        let confirmation = confirm(`your age is ${age}, you're a ${gender} and you are from ${town}`);
        
        if (confirmation === false) {
            runProcess();
        }
    }

    runProcess();



    
})();
