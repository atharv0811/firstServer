const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first page</title></head>");
        res.write("<body><h1>Welcome home</h1></body>");
        res.write("</html>");
        res.end();
    } else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first page</title></head>");
        res.write("<body><h1>Welcome to About Us page</h1></body>");
        res.write("</html>");
        res.end();
    } else if (req.url === "/node") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first page</title></head>");
        res.write("<body><h1>Welcome to my Node Js project</h1></body>");
        res.write("</html>");
        res.end();
    } else if (req.url === "/") {

        fs.readFile("message.txt", (err, data) => {
            if (err) {
                res.setHeader("Content-Type", "text/html");
                res.write("<html>");
                res.write("<head><title>My first page</title></head>");
                res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                res.write("</html>");
                res.end();
            } else {
                res.setHeader("Content-Type", "text/html");
                res.write("<html>");
                res.write("<head><title>My first page</title></head>");
                res.write(`<body><form action="/message" method="POST"><div><h1>${data}</h1></div><input type="text" name="message"><button type="submit">Send</button></form></body>`);
                res.write("</html>");
                res.end();
            }
        });

    } else if (req.url === "/message" && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=").splice(1, 1).toString();
            fs.writeFile('message.txt', message, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        })
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My first page</title></head>");
        res.write("<body><h1>Page not found</h1></body>");
        res.write("</html>");
        res.end();
    }
});

server.listen(4000);