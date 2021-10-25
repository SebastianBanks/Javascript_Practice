// repeat string num times

function repeatStringNumTimes(str, num) {

    if(num < 0) return "";

    if (num === 1) return str;

    return str + repeatStringNumTimes(str, num - 1);

    /*
    var final = "";
    if (num < 0) return "";

    for (var i=0; i<num; i++) {
        final += str;
    }

    return final;
    */
}

console.log(repeatStringNumTimes("abc", 3))