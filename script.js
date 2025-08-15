function stringChop(str, length) {
    // Handle invalid inputs
    if (!str || length <= 0) return [];

    let chunks = [];
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }
    return chunks;
}


// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
