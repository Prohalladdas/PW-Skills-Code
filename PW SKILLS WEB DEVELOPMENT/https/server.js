let http = require('http')

let server = http.createServer((req,res) =>{
    if (req.url == '/'){
        res.write('<h1>Hello World my fff</h1>');
    }
    res.end()
})
server.listen(3000);
console.log("Server is running");
