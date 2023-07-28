var express = require('express');
var router = express.Router();

// index.js

const glossaryData = require('./devops_glossary.json');
// Function to display glossary term by ID
// Display all glossary terms
console.log("DevOps Glossary:");
console.log("-----------------");
glossaryData.forEach(term => {
  console.log(`Id: ${term.Id}`);
  console.log(`Term: ${term.Term}`);
  console.log(`Description: ${term.Description}`);
  console.log(`Reference: ${term.Reference}`);
  console.log("-----------------");
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'ABC' , tble: glossaryData});
});

module.exports = router;








