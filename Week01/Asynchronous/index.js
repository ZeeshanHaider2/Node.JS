const fs = require ('fs');
const util = require ('util');

const readFile = util.promisify(fs.readFile); 
//const writeFile = util.promisify(fs.writeFile);


console.time ('Time to read files Asynchronously');

const promise_file1 = readFile ('file1.txt','utf-8');
const promise_file2 = readFile ('file2.txt','utf-8');
const promise_file3 = readFile ('file3.txt','utf-8');
const promise_file4 = readFile ('file4.txt','utf-8');

Promise.all([promise_file1,promise_file2,promise_file3,promise_file4])
  .then((data)=>{
      const fileConcat = data.join ('');
      //https://stackoverflow.com/questions/47559629/javascript-split-string-with-regex-and-then-join-it
      //The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
      const wordsArray = fileConcat.split(/[^a-zA-Z0-9]/).filter(word => word.length > 0);
      //return wordsArray;
      //console.log(wordsArray);
      const wordsMap = {};
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
      //We can use a JavaScript object as a map for counting the number of times each word occurs in the file. The forEach() method is used to iterate over an array and then perform an operation on each word in the array. Then we check if the word exists in the map and if it does we increment its count. If the word doesn’t exist, then we add it to the map and give it an initial value of 1. The words are used as the object keys and the hasOwnProperty() method is used to check if the word exists as a key
      wordsArray.forEach((key)=> {
         if (wordsMap.hasOwnProperty(key)) {
           wordsMap[key]++;
         } else {
           wordsMap[key] = 1;
         }
      });

     // return wordsMap;
      console.log(wordsMap);
     
  })

  .then (()=>{
      console.timeEnd('Time to read files Asynchronously');
  })
  .catch ((error)=>{
      console.log('error', error);
  });


