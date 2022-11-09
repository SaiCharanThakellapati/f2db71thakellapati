var Amazon = require('../models/Amazon'); 
 
// List of all Costumes 
exports.Amazon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon list'); 
}; 

// List of all Costumes 
exports.Amazon_list = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.send(theAmazons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
exports.Amazon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 

// List of all Costumes 
exports.Amazon_detail = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.send(theAmazons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.Amazon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon create POST'); 
}; 
 
// List of all Costumes 
exports.Amazon_create_post = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.send(theAmazons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume delete form on DELETE. 
exports.Amazon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon delete DELETE ' + req.params.id); 
}; 

// List of all Costumes 
exports.Amazon_delete = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.send(theAmazons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume update form on PUT. 
exports.Amazon_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.Amazon_update_put = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.send(theAmazons); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 