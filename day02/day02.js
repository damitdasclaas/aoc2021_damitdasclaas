const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .map((x) => x.split(" "));

let data = input.map(
  (x) =>
    (x = {
      dir: x[0],
      val: parseInt(x[1]),
    })
);

let pos = 0;
let dep = 0;

for (i = 0; i < data.length; i++) {
  switch (data[i].dir) {
    case "forward":
      pos += data[i].val;
      break;
    case "up":
      dep -= data[i].val;
      break;
    case "down":
      dep += data[i].val;
      break;
  }
}

console.log(pos * dep);

let pos2 = 0;
let dep2 = 0;
let aim = 0;

for (i = 0; i < data.length; i++) {
  switch (data[i].dir) {
    case "forward":
      pos2 += data[i].val;
      dep2 += data[i].val * aim;
      break;
    case "up":
      aim -= data[i].val;
      break;
    case "down":
      aim += data[i].val;
      break;
  }
}

console.log(pos2 * dep2);
