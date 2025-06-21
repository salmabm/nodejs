var express = require('express');
var router = express.Router();

/* GET home page. */
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

module.exports = router;
