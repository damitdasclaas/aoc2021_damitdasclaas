const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");

let gam = "";
let eps = "";

let ones = 0;
let zeros = 0;

for (i = 0; i < 12; i++) {
  for (j = 0; j < input.length; j++) {
    if (input[j].charAt(i) == 1) {
      ones++;
    } else if (input[j].charAt(i) == 0) {
      zeros++;
    }
  }
  if (ones > zeros) {
    gam += 1;
    eps += 0;
  } else if (ones < zeros) {
    gam += 0;
    eps += 1;
  }
  ones = 0;
  zeros = 0;
}

console.log(parseInt(gam, 2) * parseInt(eps, 2));
