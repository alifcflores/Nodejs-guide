const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDiretorio = require('./util/path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res)=>{
    res.status(404).sendFile(path.join(rootDiretorio, 'views', '404.html'));
});

app.listen(3000);