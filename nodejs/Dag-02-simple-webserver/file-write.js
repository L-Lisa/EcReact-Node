// Write to file
const fs = require('fs');

const fileUrl = "test.txt";
const contents = "Detta är en vanlig test file\nRad 2";
fs.writeFile(fileUrl, contents, (err) => {
    if (err) {
        console.log('Fel');
    }
})


