var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test crud');
});
//1ere fonction : getByid 
//juste l'appel de la fonction getById qu'on doit developper dans le controller

//2eme fonction : getAll
//juste l'appel de la fonction getAll qu'on doit developper dans le controller

//3eme fonction : create
//juste l'appel de la fonction create qu'on doit developper dans le controller

//4eme fonction : update
//developpement ici

//5eme fonction : delete
//developpement ici

module.exports = router;
