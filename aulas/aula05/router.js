const express = require('express');

//instancia o router
const router = express.Router();

//midwere de rota
router.get("/produtos", function(req, res){
    res.json([]);

})

router.get("/produtos/:produtoId", function (req, res){
    if(req.params.produtoId == 10000)
    req.statusCode(404).json({msg: "produto não encontrado"})
    return;
})

module.exports = router;