const express = require('express');
const router = express.Router();
const path = require('path');
const rootDiretorio = require('../util/path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;