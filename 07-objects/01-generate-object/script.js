/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    document.getElementById("run").onclick = Element => {
        const myIntro = {
            firstName: "Jawad",
            secondName: "Qureshi",
            age: "22",
            city: "Sint-niklaas",
            country: "Belgium"
        }

        console.log(`Hello, my name is ${myIntro.firstName}, my family name is ${myIntro.secondName}
        and i live in ${myIntro.city} which is in ${myIntro.country}, oh and btw i am ${myIntro.age}`);
    }


