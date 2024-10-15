import express from 'express';

const router = express.Router();

router.get('/:operation/:a/:b', (req, res) => {
    handleOperation(req.params.a, req.params.b, req.params.operation, res);
});

router.get('/:operation/', (req, res) => {
    const { a, b } = req.query;
    handleOperation(a, b, req.params.operation, res);
});

router.post('/:operation/', (req, res) => {
    const { a, b } = req.body || {};
    handleOperation(a, b, req.params.operation, res);
});

const handleOperation = (a, b, operation, res) => {
    const numA = parseInt(a), numB = parseInt(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).json({ error: 'Invalid numbers' });
    }
    const ops = {
        addition: numA + numB,
        subtraction: numA - numB,
        multiplication: numA * numB,
        division: numB !== 0 ? numA / numB : 'Division by zero',
        modulus: numB !== 0 ? numA % numB : 'Modulus by zero',
    };
    let result = ops[operation];
    if (result === undefined || isNaN(result)) {
        return res.status(400).json({ error: result || 'Invalid operation' });
    }
    res.json({ results: result });
};

export default router;
