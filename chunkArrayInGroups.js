// write a function that splits an array into size number of groups

function chunkArrayInGroups(arr, size) {
    var groups = [];

    while (arr.length > 0) {
        groups.push(arr.splice(0, size))   
    }

    return groups
    /*
    while (arr.length > 0) {
        if (arr.length >= size) {
            groups.push(arr.slice(0, size));
            arr = arr.slice(size)
        } else {
            groups.push(arr);
            arr = arr.slice(size)
        }
    }

    return groups;
    */
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 3));