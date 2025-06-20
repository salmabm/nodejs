var express = require('express');
var os = require('os');

var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('bonjour os' );
});
router.get('/bonjour', function(req, res, next) {
  res.end('bonjour 2' );
});


//1ere fonction 
router.get('/os2', function(req, res, next) {
  res.json({
    
      "hostname": os.hostname(),
      "type":os.type(),
      "platform": os.platform()
    
  });
});

//2eme fonction 
router.get('/cpus', function(req, res, next) {
  res.send(os.cpus() );
});


//3eme fonction
router.get('/cpus/:id', function(req, res, next) {
const id =req.params.id;
res.send(os.cpus()[id]);3

});

module.exports = router;
