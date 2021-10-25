// return largest numbers in a 2d array

function largestNum(arr) {

    var maxes = [0, 0, 0, 0];

    for (var i=0; i<arr.length; i++) {
        for (var j=0; j<arr[i].length; j++){
            var currentElement = arr[i][j];
            if (currentElement >= maxes[i]) {
                maxes[i] = currentElement;
            }
        }
    }
    return maxes;

    /*
    var maxes = [];

    for (i=0; i<arr.length; i++) {
        var tempMax = arr[i][0];
        for (j=0; j<arr[i].length; j++){
            var currentElement = arr[i][j];
            if (currentElement >= tempMax) {
                tempMax = currentElement;
            }
        }
        maxes.push(tempMax);
    }
    return maxes
    */
}

console.log(largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// [5, 27, 39, 1001]