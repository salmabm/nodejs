var express = require('express');
var router = express.Router();
const UserController = require('../controller/UserController');
const User    = require('../model/user'); 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test crud');
});


router.get('/getById/:id', UserController.getById);

router.get('/getAll', UserController.getAll);

router.post('/create', UserController.create);

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
router.put('/update/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body    );
    if (!user) return res.status(404).json({ message: 'Utilisateur introuvable.' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.', error: err.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur introuvable.' });
    res.status(204).end();                
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur.', error: err.message });
  }
});

module.exports = router;
