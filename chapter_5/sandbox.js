//object

let user = {
  name: "Clavan",
  age: 30,
  email: "clavan@gmail.com",
  location: "Winnipeg",
  course: ["Server", "Program"],
  login: function () {
    console.log("The user is logged in");
  },
  logout: function () {
    console.log("The user is logged out");
  },
  logCourse: function () {
    console.log(this);
  },
};

console.log(user);

user.age = 25;
console.log(user.age);
console.log(user["age"]);

user.login();
user.logCourse();
