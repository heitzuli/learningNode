import express from 'express';

const app = express();
const PORT = 8000;
app.get('/', (req,res) =>
    res.status(200).send('Express + TypeScript Server is confusing!'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});