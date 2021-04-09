var parking= require('../models/parking');
// List of all parkings
exports.parking_list= async function(req, res){
    try{
        theparking= await parking.find();
        res.send(theparking);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};

// for a specific parking.
exports.parking_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await parking.findById( req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};


// Handle parking delete form on DELETE.
exports.parking_delete= function(req, res) {
    res.send('NOT IMPLEMENTED: parking delete DELETE '+ req.params.id);
};

// Handle parking update form on PUT.
exports.parking_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
    let toUpdate = await parking.findById( req.params.id)
// Do updates of properties
    if(req.body.Types) toUpdate.Types = req.body.Types;
    if(req.body.ticket) toUpdate.ticket = req.body.ticket;
    if(req.body.capacity) toUpdate.capacity = req.body.capacity;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } 
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

exports.parking_view_all_Page= async function(req, res) {
    try{
        theparking= await parking.find();
        res.render('parking', { title:'parking Search Results', results: theparking});
    }catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};


// Handle parking create on POST.
exports.parking_create_post= async function(req, res) {
    console.log(req.body)
    let document= new parking();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"parkingtype":"goat", "cost":12, "size":"large"}
    document.Type = req.body.Type;
    document.ticket = req.body.ticket;
    document.capacity = req.body.capacity;
    try{
        let result= await document.save();
        res.send(result);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};