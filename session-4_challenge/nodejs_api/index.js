const express = require('express')
const app = express()
const port = 3000
fs = require('fs');
app.get('/', (req, res) => {
    res.end('Hello everyone.');
});
app.get('/learning', (req, res) => {
    res.end("Here,I've created a book api. Here it is (/list_books).");
});
app.get("/list_books", (req, res) => {
    fs.readFile(__dirname + '/' + 'data.json', (err, data) => {
        res.end(data);
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});