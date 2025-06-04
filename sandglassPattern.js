let n = 5;

function sandglassPattern(n) {
  for (let i = n; i >= 1; i--) {
    let bag = "";
    for (let j = n - i; j >= 1; j--) {
      bag += " ";
    }
    for (let k = i * 2 - 1; k >= 1; k--) {
      bag += "*";
    }
    console.log(bag);
  }
  for (let i = 1; i <= n; i++) {
    let bag = "";
    for (let j = 1; j <= n - i; j++) {
      bag += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      bag += "*";
    }
    console.log(bag);
  }
}

sandglassPattern(n);
