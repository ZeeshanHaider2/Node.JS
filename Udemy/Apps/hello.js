console.log("Zeeshan is my Name");

/*let myArrays = ["hhhh", "njjjjn"];

let x = myArrays.map(element => element.length);

console.log(x);

function sayHi(greeting) {
  console.log(greeting);
}
sayHi("Hello!");

let sayHii = greeting => console.log(greeting);

sayHii("njnjjjnjn");

let array = [1, 2, 3, 4];
function getAverageRating() {
  let ratingsSum = array.reduce((currentSum, rating) => currentSum + rating, 0);
  const lengthOfArray = array.length;
  let avgRating = ratingsSum / lengthOfArray;
  console.log(avgRating);
}

getAverageRating();

let names = ["Zeeshan", "Haider", "Javed", "Shaukat", "Saif"];

let result = names[Math.floor(names.length * Math.random())];

console.log(result);
*/
function countCharacter(inputString, characters) {
  let count = 0;
  let string = inputString.toLowerCase();
  let lower = characters.toLowerCase();

  for (i = 0; i < string.length; i++) {
    if (string[i] === lower) {
      count++;
    }
  }
  return count;
}

console.log(countCharacter("hHHnodKeHjjJJ", "k"));
