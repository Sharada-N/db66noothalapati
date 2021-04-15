var express= require('express');
const parking_controlers= require('../controllers/parking');
var router= express.Router();

/* GET parkings */
router.get('/',parking_controlers.parking_view_all_Page);
module.exports= router;

/* GET detail parking page */
router.get('/detail', parking_controlers.parking_view_one_Page);

/* GET create parking page */
router.get('/create', parking_controlers.parking_create_Page);

/* GET create update page */
router.get('/update', parking_controlers.parking_update_Page);

/* GET create parking page */
router.get('/delete', parking_controlers.parking_delete_Page);