var express= require('express');
var router= express.Router();
// Require controller modules.
var api_controller= require('../controllers/api');
var parking_controller= require('../controllers/parking');
/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// parking ROUTES ///
// POST request for creating a parking. 
router.post('/parking', parking_controller.parking_create_post);

// DELETE request to delete parking.
router.delete('/parking/:id', parking_controller.parking_delete);

// PUT request to update parking.
router.put('/parking/:id', parking_controller.parking_update_put);

// GET request for one parking.
router.get('/parking/:id', parking_controller.parking_detail);

// GET request for list of all parking items.
router.get('/parking', parking_controller.parking_list);

module.exports= router;