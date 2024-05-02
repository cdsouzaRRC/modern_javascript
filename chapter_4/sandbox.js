function greet() {
  console.log("hello world");
}

greet();

function greetByName(name = "nobody") {
  console.log(`hello ${name}`);
}

greetByName("Clavan");

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
};

const area = calcArea(5);

console.log(area);

//arrow function

const calArea = (radius) => 3.14 * radius ** 2;

console.log(calArea(5));
