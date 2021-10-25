// reverse a string

function reverseString(str) {
    return str.split("").reverse().join("");

    /*
    var strArr = str.split("");
    var reversedStringArr = strArr.reverse();
    var reversedString = reversedStringArr.join("");
    return reversedString;
    */

    /*
    var final = "";
    for (var i=str.length - 1; i >= 0; i--) {
        final += str[i];
    }

    return final;
    */

}

console.log(reverseString("hello"));

