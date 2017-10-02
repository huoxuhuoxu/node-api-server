
module.exports = function(req, res, next){
    if(req.method.toLowerCase() === "get"){
        res.send("222222");
    }else{
        res.send("3333333");
    }
};
