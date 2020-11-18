// Read file
const fs = require('fs');

let url = 'demo.txt'

fs.readFile(url, 'utf-8', function(err, contents) {
    if (err) {
        return console.log(err); 
    } 
    console.log(contents);
});

console.log('Innan filen visas');

