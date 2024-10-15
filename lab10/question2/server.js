import express from 'express';
import calcRouter from './router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', calcRouter);

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});
