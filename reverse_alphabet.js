function reverseAlphabetWithNumber(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const reversedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      result += reversedAlphabet[index];
    } else {
      result += char;
    }
  }

  return result;
}

const inputString = "NEGIE1";
const reversedString = reverseAlphabetWithNumber(inputString);
console.log("Hasil =", reversedString);
