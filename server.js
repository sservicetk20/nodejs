const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/', function (req, res){
    res.send('hola');
});

/* app.use('/',function(req, res) {
    res.send('hola');
}); */

app.listen(3000);

console.log('corriendo');