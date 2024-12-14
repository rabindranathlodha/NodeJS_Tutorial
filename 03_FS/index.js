const fs =  require('fs');

//Sync Way to write in file
//fs.writeFileSync("./test.txt", "Hello World");

//Async Way to write in a file
// fs.writeFile("./test.txt", "Hello World from async", (err) => {});

//sync way to read a file
// const result = fs.readFileSync('./contacts.txt', 'utf-8');
// console.log(result);

//Async way to read a file
// fs.readFile('./contacts.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

//sync way to append a file
// fs.appendFileSync('./test.txt', "\nThis is a new line appended")

//Async way to append a file
// fs.appendFile('./test.txt', "\nThis is a new line appended from async code", (err) => {})