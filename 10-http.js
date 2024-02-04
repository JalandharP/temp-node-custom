const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === "/") {
        res.end("Welcome to our Empty page");
        return;
    }

    if(req.url == "/about") {
        res.end("Welcome to our about page with short description");
        return;
    }

   res.end(`
   <h1> Oops!.. Somethign went </h1>
   <a href="/">go back</a>
   `)
    
})

server.listen(8080);