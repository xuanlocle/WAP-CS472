import express from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get('/image', (req, res, next) => {
    handleImageReq(res, next);
});
router.get('/pdf', (req, res, next) => {
    handlePdfReq(res, next);
});
router.get('/about', (req, res, next) => {
    handleAboutReq(res, next);
});
router.get('/', (req, res) => {
    handleHomeReq(res);
});

const handleImageReq = (res, next) => {
    res.setHeader('Content-Type', 'image/jpeg');
    const imagePath = path.join(__dirname, 'files', 'image.jpg');
    const src = fs.createReadStream(imagePath);
    src.on('error', (err) => next(err));
    src.pipe(res);
}

const handlePdfReq = (res, next) => {
    res.setHeader('Content-Type', 'application/pdf');
    const filePath = path.join(__dirname, 'files', 'sample.pdf');
    const src = fs.createReadStream(filePath);
    src.on('error', (err) => next(err));
    src.pipe(res);
}

const handleAboutReq = (res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    const filePath = path.join(__dirname, 'files', 'about.txt');
    const src = fs.createReadStream(filePath);
    src.on('error', (err) => next(err));
    src.pipe(res);
}

const handleHomeReq = (res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('My first page');
    res.end();
}

export default router;