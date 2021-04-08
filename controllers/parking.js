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
exports.parking_detail= function(req, res) {
    res.send('NOT IMPLEMENTED: parking detail: '+ req.params.id);
};


// Handle parking delete form on DELETE.
exports.parking_delete= function(req, res) {
    res.send('NOT IMPLEMENTED: parking delete DELETE '+ req.params.id);
};

// Handle parking update form on PUT.
exports.parking_update_put= function(req, res) {
    res.send('NOT IMPLEMENTED: parking update PUT'+ req.params.id);
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