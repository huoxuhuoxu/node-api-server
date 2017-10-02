
module.exports = function(req, res, next){
    console.log("test middleware...");
    next();
};
