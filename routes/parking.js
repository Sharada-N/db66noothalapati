var express= require('express');
const parking_controlers= require('../controllers/parking');
var router= express.Router();
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
module.exports= router;
/* GET parkings */
router.get('/',parking_controlers.parking_view_all_Page);


/* GET detail parking page */
router.get('/detail', parking_controlers.parking_view_one_Page);

/* GET create parking page */
router.get('/create',secured, parking_controlers.parking_create_Page);

/* GET create update page */
router.get('/update',secured, parking_controlers.parking_update_Page);

/* GET create parking page */
router.get('/delete',secured, parking_controlers.parking_delete_Page);