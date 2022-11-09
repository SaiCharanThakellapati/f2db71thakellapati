var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Amazon_controller = require('../controllers/Amazon'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/Amazons', Amazon_controller.Amazon_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/Amazons/:id', Amazon_controller.Amazon_delete); 
 
// PUT request to update Costume. 
router.put('/Amazons/:id', Amazon_controller.Amazon_update_put); 
 
// GET request for one Costume. 
router.get('/Amazons/:id', Amazon_controller.Amazon_detail); 
 
// GET request for list of all Costume items. 
router.get('/Amazons', Amazon_controller.Amazon_list); 
 
module.exports = router; 