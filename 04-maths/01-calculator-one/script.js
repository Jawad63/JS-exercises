/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function first() {
    var a = parseInt(document.getElementById("op-one").value);
    var b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a + b);
}

function second() {
    var a = parseInt(document.getElementById("op-one").value);
    var b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a - b);
}

function third() {
    var a = parseInt(document.getElementById("op-one").value);
    var b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a * b);
}

function fourth() {
    var a = parseInt(document.getElementById("op-one").value);
    var b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a / b);
}