import http from 'http';
import fs from 'fs';
import url from 'url';
/*
Question2: Create a web server using http module: 

If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as "application/pdf".
If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as "text/plain".
If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
Otherwise return not found with status code 404.
*/
let server = http.createServer();

server.on('request',
    (req, res) => {
        const q = url.parse(req.url, true);
        const pageUrl = q.pathname;
        const method = req.method;
        if (method === 'GET' && pageUrl === '/image') {
            handleImageReq(res);
        }
        // do something…
        else if (method === 'GET' && pageUrl === '/pdf') {
            handlePdfReq(res);
        }
        else if (method === 'GET' && pageUrl === '/about') {
            handleAboutReq(res);
        }
        else if (method === 'GET' && (pageUrl === '/' || pageUrl === '/home')) {
            handleHomeReq(res);
        } else {
            handleNotFoundReq(res);
        }
    });

const handleImageReq = (res) => {
    res.setHeader('Content-Type', 'image/jpeg');
    const src = fs.createReadStream('./lab9/files/image.jpg');
    src.pipe(res);
}

const handlePdfReq = (res) => {
    res.setHeader('Content-Type', 'application/pdf');
    const src = fs.createReadStream('./lab9/files/sample.pdf');
    src.pipe(res);
}

const handleAboutReq = (res) => {
    res.setHeader('Content-Type', 'text/plain');
    const src = fs.createReadStream('./lab9/files/about.txt');
    src.pipe(res);
}

const handleHomeReq = (res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('My first page');
    res.end();
}

const handleNotFoundReq = (res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(404)
    res.write('ERROR: Page not found');
    res.end();
}

server.listen(3000);
