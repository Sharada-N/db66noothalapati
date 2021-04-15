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

// Handle parking create on POST.
exports.parking_create_post = async function (req, res) {
    console.log(req.body)
    let document = new parking();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.Types = req.body.Types;
    document.ticket = req.body.ticket;
    document.capacity = req.body.capacity;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle parking delete form on DELETE.
exports.parking_delete = async function(req, res) {
    console.log("delete" + req.params.id)
    try {
        result = await parking.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//Handle parking update form on PUT.
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
    
// VIEWS
// Handle a show all view
exports.parking_view_all_Page = async function (req, res) {
    try {
        theparkings = await parking.find();
        res.render('parkings', { title: 'parking Search Results', results: theparkings });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
    
// Handle a show one view with id specified by query
exports.parking_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await parking.findById( req.query.id)
        res.render('parkingdetail', { title: 'parking Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.parking_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('parkingcreate', { title: 'parking Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    
// Handle building the view for updating a fish.
// query provides the id
exports.parking_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await parking.findById(req.query.id)
        res.render('parkingupdate', { title: 'parking Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
    
// Handle a delete one view with id from query
exports.parking_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await parking.findById(req.query.id)
        res.render('parkingdelete', { title: 'parking Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};