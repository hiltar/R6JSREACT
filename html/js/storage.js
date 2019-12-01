/*Pitää korjata.. */

function clear() {
    if (confirm("Are you sure?")) {
        window.localStorage.clear();
        console.log("Cleared the Local Storage");
    }
    else {
        window.alert("Abort made!");
        console.log("Aborted the Local Storage deletion");
    }
};