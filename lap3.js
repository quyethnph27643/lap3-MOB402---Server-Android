var _cal = require('./Calculator')
const express = require("express");
const app = express();

app.get('/calADD', function (req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.add(a, b);
    res.json(rs);
});
app.get('/calSUB', function (req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.sub(a, b);
    res.json(rs);
});
app.get('/calMUL', function (req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.mul(a, b);
    res.json(rs);
});
app.get('/calDIV', function (req, res){
    var rs = 0;
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    rs = _cal.mul(a, b);
    res.json(rs);
});
app.listen(8000);
