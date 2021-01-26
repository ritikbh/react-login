const express = require('express');
const router = express.Router();
const UserDetails = require('../models/userDetails');
// Routes
router.get('/user-details', (req,res) =>{

    UserDetails.find({ })
    .then((data) => {
        console.log(data);
        res.json(data)

    })
    .catch((err) => {
        console.log('error:' , err)
    })

});

module.exports = router;