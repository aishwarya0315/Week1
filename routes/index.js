var express = require('express');
var router = express.Router();

const nameList = [
  {id: '1', name: 'John', email:'John@gmail.com'},
  {id: '2', name: 'Aish', email:'Aish@gmail.com'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'ABC' , tble: nameList});
});

module.exports = router;
