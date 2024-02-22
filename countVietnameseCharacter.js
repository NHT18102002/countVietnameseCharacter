function countVietnameseCharacters(input) {
    const vietnameseCharacters = new Set(["aw", "aa", "dd", "ee", "oo", "ow", "w"]);
    let count = 0;
    let index = 0;
    
    while (index < input.length - 1) {
        const currentChar = input[index];
        const nextChar = input[index + 1];
        const combined = currentChar + nextChar;

        if (vietnameseCharacters.has(combined)) {
            count++;
            index += 2;
        } else {
            index++;
        }
    }
    return count;
}

const input = "hfdawhwhcoomdd";
const result = countVietnameseCharacters(input);
console.log("Output:", result);