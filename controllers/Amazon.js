var Amazon = require('../models/Amazon'); 
 
// List of all Amazons 
exports.Amazon_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon list'); 
}; 

// List of all Amazons 
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
 
// // for a specific Amazon. 
exports.Amazon_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 
// for a specific Amazon. 
exports.Amazon_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Amazon.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all Amazons 
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
 
// Handle Amazon create on POST. 
exports.Amazon_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon create POST'); 
}; 
 
// List of all Amazons 
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

// Handle Amazon delete form on DELETE. 
exports.Amazon_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amazon delete DELETE ' + req.params.id); 
}; 
// Handle Amazon delete on DELETE. 
exports.Amazon_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Amazon.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// List of all Amazons 
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
 




// Handle Amazon update form on PUT. 
// exports.Amazon_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: Amazon update PUT' + req.params.id); 
// }; 

// List of all Amazons 
// exports.Amazon_update_put = async function(req, res) { 
//     try{ 
//         theAmazons = await Amazon.find(); 
//         res.send(theAmazons); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle Amazon update form on PUT. 
exports.Amazon_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Amazon.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.item)toUpdate.item = req.body.item; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a Amazon. 
// query provides the id 
exports.Amazon_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Amazon.findById(req.query.id) 
        res.render('Amazonupdate', { title: 'Amazon Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.Amazon_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Amazon.findById(req.query.id) 
        res.render('Amazondelete', { title: 'Amazon Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a Amazon. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Amazon_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Amazoncreate', { title: 'Amazon Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.Amazon_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Amazon.findById( req.query.id) 
        res.render('Amazondetail',  
{ title: 'Amazon Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.Amazon_view_all_Page = async function(req, res) { 
    try{ 
        theAmazons = await Amazon.find(); 
        res.render('Amazons', { title: 'Amazon Search Results', results: theAmazons }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Amazon create on POST. 
exports.Amazon_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Amazon(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Amazon_type":"goat", "cost":12, "size":"large"} 
    document.item = req.body.item; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
