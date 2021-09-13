import express, { Application } from 'express';
// rest of the code remains same
const app:Application = express();
const PORT = 8000;


app.get('/', (req, res) => {
    console.log("calling endpoint / with Method GET")
    res.send('Express + TypeScript Server')
});
app.get('/hellow', (req, res) => {
    console.log("calling endpoint /hellow with Method GET")
    res.send('Hello World')
});

if (process.env.NODE_ENV === 'development') {
    Error.stackTraceLimit = Infinity;
}


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

