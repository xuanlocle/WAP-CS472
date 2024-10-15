import express from 'express';
import myRouter from './routers.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.enable('case sensitive routing');

app.use(myRouter)

// 404 Not Found handler for unmatched routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Global error-handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.setHeader('Content-Type', 'text/html');
    res.write(`ERROR: ${error.message}`);
    res.end();
});

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});

