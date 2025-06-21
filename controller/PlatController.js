

const Plat = require('../model/plat');

async function getall(req, res) {

 try {

  console.log("++++++");

  const data = await Plat.find();

  res.send(data);

  console.log(data);

 } catch (err) {

  res.send(err);

 }

}