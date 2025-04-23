const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url==='/home')
        {
            res.end(`<h1>Home Page</h1>`);
        }
        else if(req.url==='/about')
        {
            res.end(`<h1>About Page</h1>`);
        }
        else if(req.url==='/contact')
            {
            res.end(`<h1>Contact Page</h1>`);
        }
        else{
            res.end(`<h1>404 - Page Not Found</h1>`);
        }
});
server.listen(9000, () => {
    console.log('Server is running on port 9000');
});