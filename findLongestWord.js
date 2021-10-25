// find longest word in a string

function findLongestWord(str) {
    return str.split(" ").sort(function(a, b) {return b.length - a.length})[0];

    /*
    var words = str.split(" ");
    var longest = "";

    for (var word of words) {
        if (word.length > longest.length) longest = word;
    }

    return longest.length
    */
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));