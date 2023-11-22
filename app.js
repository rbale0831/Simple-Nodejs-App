import express from "express";

const PORT = process.env.PORT || 8888;
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World from AWS Fargate!');
});

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});