//////////*Object-1*//////////
/*
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
*/
//////////*Object-2*//////////
/*
function kv(n) {
  let result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = i ** 2;
  }
  console.log(result);
  // return result;
}
let n = +prompt("Son kiriting");
console.log(kv(n));
*/
//////////*Object-3*//////////
/*
function kv(n) {
  let result = {};
  for (let i = 1; i <= n; i++) {
    result[i] = i ** 2;
    objectKeys = objectKeys + i;
    objectValues = objectValues + i ** 2;
  }
  return result;
}
let n = +prompt("Son kiriting");
let objectKeys = 0;
let objectValues = 0;
console.log(kv(n));
console.log(objectKeys);
console.log(objectValues);
*/
//////////*Object-4*//////////
/*
let name = ["Sultonqul", "Nurjahon", "Ulug'bek"];
for (let i = 0; i <= name.length; i++) {
  Obj = {};
  Obj[name[i]] = name[i].length;
  console.log(Obj);
}
*/
//////////*Object-5*//////////
/*
let fruits = {
  apelsin: 10000,
  olma: 12000,
  mandarin: 8000,
  banan: 20000,
};
let javob = Object.values(fruits).reduce((a, b) => a + b, 0);
console.log(javob);
*/
//////////*Object-6*//////////

//////////*Object-7*//////////

//////////*Object-8*//////////

//////////*Object-9*//////////

//////////*Object-10*/////////
/*
function countOccurrences(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  }
  return result;
}
let inputArray = [7, 8, 5, 4, 7, 5, 4, 8, 5, 4, 7, 9];
console.log(countOccurrences(inputArray));
*/
