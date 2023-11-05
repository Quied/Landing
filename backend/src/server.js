const express = require('express');
const bcrypt = require('bcrypt');
const pg = require('pg');
const cors = require('cors'); // Import the cors package
const jwt = require("jsonwebtoken")


// ===== < > ====

const client = new pg.Client({
    user: 'postgres',
});


client.connect((err) => {
    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
      console.log(err ? err.stack : res.rows[0].message) // Hello World!
      client.end()
    })
 })


// client.query('SELECT * FROM users', (err, res) => {
//   if (err) { console.error('Error executing query:', err);}
//   else     { console.log('Query result:', res.rows); }

//   // client.end();
// });

  

 // === < > ===
  


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const salt = 7;

let users = [];
let refreshTokens = []

const act = '3e9af42de397cfc9387a06972c28c23a1ac7e9a60fb6dc1f05295bc6057baf500672d4a13db5d04ea84bbc4c5679164a7723f3d49f516bb73dc3df6e3b768c8e';
const rct = '56a6d157ad7d2ee09e480960ae857e528ae546d156f47433b1afad162311c45aa520697b65d13a5c72891f6145ab1f2675886fc124027dc95f86073dd8fe1462';

function generateAccessToken(user) {
    return  jwt.sign(user, act, {expiresIn: "60m"}) ;
}

function generateRefreshToken(user) {
    const refreshToken = jwt.sign(user, rct, {expiresIn: "20m"})

    refreshTokens.push(refreshToken)
    return refreshToken
}

app.post('/sign-in', async (req,res) => {
    
    const user = users.find( (c) => c.user == req.body.name);
    if(user == null){ req.status(404).send("User does not exist");}
    
    if(await bcrypt.compare(user.password, req.body.password)){
        const access_token = generateAccessToken ({user: req.body.name});
        const refresh_token = generateRefreshToken  ({user: req.body.name});

        res.json ({
            accessToken: access_token, 
            refreshToken: refresh_token
        });
    }
    else { res.status(401).send('Password incorrect'); }

});

app.post('/sign-up', async (req,res) => {

    console.log('new request..\n');

    const user = req.body.name;
    const email = req.body.email;

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    users.push ({
        user: user, 
        password: hashedPassword,
        email: email,
    });

    res.status(201).send(users)
    console.log(users)

});

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});