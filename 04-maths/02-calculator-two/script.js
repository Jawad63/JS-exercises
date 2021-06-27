/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function one() {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a + b);

}

function two() {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a - b);
}

function three() {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a * b);
}

function four() {
    let a = parseInt(document.getElementById("op-one").value);
    let b = parseInt(document.getElementById("op-two").value);
    document.getElementById("result").innerHTML = (a / b);
}

