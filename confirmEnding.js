// confirm ending -- check if a string ends with the target

function confrimEnding(str, target) {
    // do not use .endsWith(target)

    return str.substr(-target.length) === target;
    
    /*
    const lastLetter = str.substr(-target.length);
    if (lastLetter == target) {
        return true;
    } else {
        return false;
    }
    */

    /*
    return str.slice(-target.length) === target;
    */
}

console.log(confrimEnding("Bastian", "n"));