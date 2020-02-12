const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/', function (req, res){
    res.header({
        "custom-header":"personalizado",
    });

    response.success(req, res, 'mensajes')
});

app.use('/app',express.static('public'));
app.listen(3000);

console.log('corriendo');