const { readFileSync } = require("fs");

const readFileToArray = (filename) => {
  const contents = readFileSync(filename, "utf-8");
  const splitByDoubleLine = contents.split(/\n\s*\n/);
  const elfArrays = splitByDoubleLine.map((elf) => elf.split("\n"));
  return elfArrays.map((elf) =>
    elf.length <= 1 ? +elf : elf.reduce((prev, curr) => +prev + +curr)
  );
};

const reducedElfArray = readFileToArray("./elfCalories.txt");
const sortedList = [...reducedElfArray].sort((a, b) => b - a).slice(0, 3);

console.log(`Highest number of calories (part 1): ${sortedList[0]}`);

console.log(
  `Top 3 highest calories (part 2): ${sortedList.reduce(
    (prev, curr) => prev + curr
  )}`
);
