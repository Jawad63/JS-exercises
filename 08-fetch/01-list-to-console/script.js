/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").onclick = () => {
        fetch('../../_shared/api.json')
            .then(res => res.json())
            .then(data => console.log(data));
    }

    
})();
