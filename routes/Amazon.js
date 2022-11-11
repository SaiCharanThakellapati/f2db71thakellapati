var express = require('express');
const Amazon_controlers= require('../controllers/Amazon');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Amazon', {title:'Search Results Amazon'});
// });

/* GET costumes */ 
router.get('/', Amazon_controlers.Amazon_view_all_Page );
// GET request for one costume. 
router.get('/Amazons/:id', Amazon_controlers.Amazon_detail); 
module.exports = router;
 

 
