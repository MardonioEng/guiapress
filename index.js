const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/databse');

//view engine
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//databse
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o BD realizada com sucesso!");
    }).catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(3000, () => {
    console.log("O servidor está rodando...");
});