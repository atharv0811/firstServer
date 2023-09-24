const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>WebPage</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>WebPage</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end();
    }
    if (url === '/node') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>');
        res.write('<head><title>WebPage</title></head>')
        res.write('<body><h1>Welcome to Node JS Projects</h1></body>')
        res.write('</html>');
        return res.end();
    }
});

server.listen(4000);