/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function currentTime() {
        var date = new Date();
        var hours = date.getHours();
        var days = date.getDay();
        var minutes = date.getMinutes();


        var amPm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = date + ' ' + hours + ':' + minutes + ' ' + amPm;
        return strTime;
    }
    document.getElementById("thedate").innerHTML = currentTime();
    
})();
