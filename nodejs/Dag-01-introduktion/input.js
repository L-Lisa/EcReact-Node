// Exemple argument == parametrar

// node input 3000 127.0.0.1  index: 0 1 2 
/*
process.argv.forEach((val, index) => {
    console.log(`${val} : ${index}`);
})
*/

console.log(process.argv);


var port = process.argv[2];
var host = process.argv[3];
// console.log(`${host} : ${port}`)
