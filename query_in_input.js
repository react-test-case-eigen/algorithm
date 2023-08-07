function countQueryWordsInInput(inputArray, queryArray) {
  const wordCount = {};
  const result = [];

  for (const word of inputArray) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  for (const query of queryArray) {
    result.push(wordCount[query] || 0);
  }

  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const output = countQueryWordsInInput(INPUT, QUERY);
console.log(output);
