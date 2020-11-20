// File-Read Syncronize - är inte async 
// ta in paket -  
// skriv i teminalen  "node file-read-sync"
const fs = require('fs');


var contents = fs.readFileSync('demo.txt', 'utf-8');
console.log(contents);

