const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url}: New request recieved\n`
    fs.appendFile('./serverRequest.txt', log, (err, data) => {
        switch(req.url){
            case '/': res.end("Home Page")
            break
            case '/about': res.end("About Page")
            break
            default: res.end("404 not found")
            break

        }
    });
});

myServer.listen(3000, () => console.log("Server Started"))