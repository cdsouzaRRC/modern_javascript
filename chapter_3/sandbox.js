//loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

//do loop

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

//condition

let a = 10;
let b = 20;

if (a > b) {
  console.log("A is greater than B");
} else {
  console.log("B is greater than A");
}

//logical operator

let sum = 10;

let result = sum > 1 && sum < 20;

console.log(result);

sum = 20;

result = sum > 1 && sum < 20;

console.log(result);

sum = 20;

result = sum > 1 || sum < 20;

console.log(result);

console.log(!result);

//break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] == 0) {
    continue;
  }

  console.log("Your score is " + scores[i]);

  if (scores[i] == 100) {
    break;
  }
}

//switch
const grade = "C";

switch (grade) {
  case "A":
    console.log("You got A Grade");
    break;
  case "B":
    console.log("You got B Grade");
    break;
  case "C":
    console.log("You got C Grade");
    break;
  case "D":
    console.log("You got D Grade");
    break;
  default:
    console.log("You got F Grade");
    break;
}
