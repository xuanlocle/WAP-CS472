import express from 'express';
import studentRouter from './routers/studentRouter.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/api/v1/students', studentRouter);

//this middleware only invoke when next(Error) be call
app.use((err, req, res, next) => {
    if (err.message === 'NOT Found')
        res.status(404).json({ error: err.message });
    else
        res.status(500).json({ error: 'Something went wrong. ' + err.message });
})


//this middleware only invoke when not exist route API be call
app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported' });
})
app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});
