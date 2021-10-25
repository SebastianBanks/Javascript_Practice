// truncateString

function truncateString(str, num) {
    if (num <=3) return str.slice(num) + "...";
    if (num >= str.length) return str;
    return str.slice(0, num-3) + "...";
}

console.log(truncateString("A-ticket a-tasket A green and yellow basket", 11));