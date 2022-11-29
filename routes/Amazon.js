var express = require('express');
const Amazon_controlers= require('../controllers/Amazon');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Amazon', {title:'Search Results Amazon'});
// });`
/* GET detail Amazon page */ 
router.get('/detail', Amazon_controlers.Amazon_view_one_Page);
/* GET Amazon */ 
router.get('/', Amazon_controlers.Amazon_view_all_Page );
/* GET create Amazon page */ 
router.get('/create',secured, Amazon_controlers.Amazon_create_Page); 
/* GET create update page */ 
router.get('/update', secured,Amazon_controlers.Amazon_update_Page); 
/* GET delete costume page */ 
router.get('/delete',secured, Amazon_controlers.Amazon_delete_Page); 
// GET request for one Amazon. 
router.get('/Amazons/:id', Amazon_controlers.Amazon_detail); 
module.exports = router;    
 

 







