//  OBJECT ///
// const surName = "last name";
// let person = {
//   firstName: "Sultonqul",
//   "last name": "Nortoyloqov",
//   fullName: function () {
//     return "Sultonqul Nortoyloqov";
//   },
//   age: 30,
//   subjects: ["math", "physics", "english"],
//   isMarried: true,
//   job: null,
//   2025: undefined,
//   2019: "Enter to the university",
//   2014: "Olympiads first position",
//   university: {
//     name: "AMITY",
//     GPA: 4.72,
//   },
//   symbol: Symbol(),
// };

// console.log(person);

//  ACCESSING ///
// console.log(person.firstName);
// console.log(person["last name"]);
// console.log(person[surName]);

//  CHANGING ///
// person.firstName = "John";
// person["last name"] = "Doe";
// console.log(person);

// ADDING ///
// person.course = "React";
// person["Milliy sertifikat"] = "Ona tili";
// console.log(person);

// DELETING ///
// delete person.course;
// delete person["Milliy sertifikat"];
// console.log(person);
// console.log(person.course);

// PROPERTY SHORTHAND ///
// function createMachine(name, status) {
//   let machine = {
//     name: name,
//     status: status,
//   };

//   return machine;
// }

// function createMachine(name, status) {
//   return {
//     name: name,
//     status: status,
//   };
// }

// function createMachine(name, status) {
//   return {
//     name,
//     status,
//   };
// }

// const malibu = createMachine("Malibu", "has");
// console.log(malibu);

// let firstName = "John";
// let lastName = "Doe";
// const person = {
//   firstName,
//   lastName,
// };

// console.log(person);

// METHODS SHORTHAND ///
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   greet: function () {
//     console.log("Hello, World!");
//   },
// };

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   greet() {
//     console.log("Hello, World!");
//   },
// };

// person.greet();

// OBJECT-1 ///
function displayObj(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

displayObj({
  firstName: "Sultonqul",
  lastName: "Nortoyloqov",
  age: 23,
  languages: ["js", "python", "c++", "nodejs"],
  friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
});
