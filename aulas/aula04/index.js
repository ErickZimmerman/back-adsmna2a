const express = require('express');

const app = express();

//middleware integrado
app.use(express.json());

//middleware de app
app.use(function(req, res, next){
    console.log("Data", new Date());
    next();
})


//middleware de rota
app.get("/", function(req, res){
    //requisição
    console.log("URL: ",req.url);
    console.log("Metodo: ", req.method);
    console.log("Header: ", req.headers);
    console.log("Parametros: ", req.params);
    console.log("Corpo: ", req.body)
    res.send("Ola");

})

app.post("/", function(req, res){

    console.log(req.body);
    res.json ({status:"200", mensage:"sucesso"})
})

app.put("/", function(req, res){
    res.status(204).end();
});

app.delete("/", function(req, res){
    throw new Exception();
})

app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim");
})
//300 é o numero da prota
app.listen (3000, function(){
    console.log("API está ON!")

    
})

module.exports = app