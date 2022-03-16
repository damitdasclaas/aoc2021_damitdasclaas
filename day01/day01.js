const fs = require("fs");

const numbers = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => parseInt(x));

let increases = 0;
let increases2 = 0;

for (x = 0; x < numbers.length; x++) {
  if (numbers[x] > numbers[x - 1]) {
    increases++;
  }
}

console.log(increases);

let windows = [];

for (x = 0; x < numbers.length; x++) {
  windows.push(numbers[x] + numbers[x + 1] + numbers[x + 2]);
}

for (x = 0; x < windows.length; x++) {
  if (windows[x] > windows[x - 1]) {
    increases2++;
  }
}

console.log(increases2);
