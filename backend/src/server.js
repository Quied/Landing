const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/signin', (req,res) => {

});

app.posh('/signin', (req,res) => {

});

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});