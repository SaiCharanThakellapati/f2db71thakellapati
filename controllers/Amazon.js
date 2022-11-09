var Amazon = require('../models/Amazon'); 
 
// List of all Costumes 
exports.Amazon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon list'); 
}; 
 
// for a specific Costume. 
exports.Amazon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.Amazon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.Amazon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.Amazon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon update PUT' + req.params.id); 
}; 