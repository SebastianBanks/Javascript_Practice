// factorial function --- the product of an integer and all integers below it

function factorialize(num) {
    var result = 1;
    for (var i=1; i<=num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorialize(5));