// palindrome -- word thats the same foward and backwords

function isPalindrome(str) {
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");
    var reversed = smallStr.split("").reverse().join("");
    
    if (reversed == smallStr) return true;

    return false;
    
}

console.log(isPalindrome("Racecar"));