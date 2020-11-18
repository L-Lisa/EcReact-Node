// File-Read Syncronize

const fs = require('fs');


var contents = fs.readFileSync('demo.txt', 'utf-8');
console.log(contents);

