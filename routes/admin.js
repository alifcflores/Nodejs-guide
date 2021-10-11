const express = require('express');
const path = require('path');
const rootDiretorio = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res)=>{
    res.sendFile(path.join(rootDiretorio, 'views', 'add-product.html'))
});
 
router.post('/add-product', (req, res)=>{
    console.log(req.body);
    res.redirect('/');   
});

module.exports = router;