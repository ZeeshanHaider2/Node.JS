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
      const wordsArray = fileConcat.split(/[^a-zA-Z0-9]/).filter(word => word.length > 0);
      //return wordsArray;
      //console.log(wordsArray);
      const wordsMap = {};

      wordsArray.forEach((key)=> {
         if (wordsMap.hasOwnProperty(key)) {
           wordsMap[key]++;
         } else {
           wordsMap[key] = 1;
         }
      });

      //return wordsMap;
      console.log(wordsMap);
     
  })
  

  .then (()=>{
      console.timeEnd('Time to read files Asynchronously');
  })
  .catch ((error)=>{
      console.log('error', error);
  });
