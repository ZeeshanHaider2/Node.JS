const fs = require ('fs');


console.time('Time to read files Synchronously');
//https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
const file1 = fs.readFileSync ('file1.txt','utf-8');
const file2 = fs.readFileSync ('file2.txt','utf-8');
const file3 = fs.readFileSync ('file3.txt','utf-8');
const file4 = fs.readFileSync ('file4.txt','utf-8');

const fileConcat = file1  + file2 +  file3 + file4 ;


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
 
    
    console.log(wordsMap);
    console.timeEnd('Time to read files Synchronously');