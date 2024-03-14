const express = require('express');
const routerProdutos = require('./router')
const app = express();

app.use(routerProdutos)

app.listen(3000, function(){
    console.log("API ON")
});

module.exports = app;

