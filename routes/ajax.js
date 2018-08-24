var express = require('express');
var router = express.Router();

var data = [
    {name:'taro',age:335,mail:'taro@saf'},
    {name:'tqweo',age:3325,mail:'taro@saf'},
    {name:'tqwewqero',age:3542,mail:'taro@saf'},
    {name:'tsadfaro',age:3235,mail:'taro@saf'}
];

router.get('/',(req,res,next)=>{
    var n = req.query.id;
    res.json(data[n]);
});

module.exports = router;
