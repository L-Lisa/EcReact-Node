// Write to file, vilken fil ska skrivas?
// node file-write   -?ingen respons

const fs = require('fs');

const fileUrl = "test.txt";
const contents = "Detta är en vanlig test file\nRad 2";
fs.writeFile(fileUrl, contents, (err) => {
    if (err) {
        console.log('Fel');
    }
})


