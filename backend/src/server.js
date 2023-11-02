const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});