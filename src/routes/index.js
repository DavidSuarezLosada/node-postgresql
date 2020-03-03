const { Router } =  require('express');
const router = Router();
const { pool } = require('../database/index');



// routes
router.get('/test', (req,res) => {
    const data = {
        "name" : "fast",
        "website" : "fastweb.com"
    };
    res.json(data);
});


module.exports = router;