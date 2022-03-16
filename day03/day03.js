const fs = require("fs");

const input = fs.readFileSync("input.txt", { encoding: "utf-8" }).split("\n");

// puzzle 1

let gam = "";
let eps = "";

let ones = 0;
let zeros = 0;

for (let i = 0; i < 12; i++) {
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

// puzzle 2

function checkOxy(array, at) {
  let ones = 0;
  let zeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(at) == 1) {
      ones++;
    } else {
      zeros++;
    }

    if (i == array.length - 1) {
      if (ones > zeros) {
        return 1;
      }
      if (ones < zeros) {
        return 0;
      } else if (ones == zeros) {
        return 1;
      }
    }
  }
}

function checkCo2(array, at) {
  let ones = 0;
  let zeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(at) == 1) {
      ones++;
    } else {
      zeros++;
    }

    if (i == array.length - 1) {
      if (ones > zeros) {
        return 0;
      }
      if (ones < zeros) {
        return 1;
      } else if (ones == zeros) {
        return 0;
      }
    }
  }
}

function filterOxyEntry(array, at) {
  if (checkOxy(array, at) == 1) {
    return array.filter((x) => x.charAt(at) == 1);
  } else if (checkOxy(array, at) == 0) {
    return array.filter((x) => x.charAt(at) == 0);
  }
}

function filterCo2Entry(array, at) {
  if (checkCo2(array, at) == 1) {
    return array.filter((x) => x.charAt(at) == 1);
  } else if (checkCo2(array, at) == 0) {
    return array.filter((x) => x.charAt(at) == 0);
  }
}

let oxy = input;

for (let i = 0; i < 12; i++) {
  if (oxy.length > 1) {
    oxy = filterOxyEntry(oxy, i);
  }
}

let co2 = input;

for (let i = 0; i < 12; i++) {
  if (co2.length > 1) {
    co2 = filterCo2Entry(co2, i);
  }
}

console.log(parseInt(oxy, 2) * parseInt(co2, 2));
