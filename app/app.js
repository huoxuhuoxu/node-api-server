// app-core
var path = require("path");
var Express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var formatUnification = require("node-data-format-unification");
var reqLog = require("node-server-log");
var readDir = require("./tools/requireDir");
var app = Express();

// test
var {
    test: testInterface
} = readDir("../controllers");
var {
    test: testMiddleware
} = readDir("../middlewares");

app.use(Express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use((req, res, next) => {
    if(req.url === "/favicon.ico"){
        res.end();
        return ;
    }
    next();
});

app.use(testMiddleware);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(formatUnification());
app.use(reqLog());

// interface
app.all("/test", function(req, res, next){
    console.log("test interface...");
    next();
}).get("/test", testInterface).post("/test", testInterface);


// 404
app.use((req, res, next) => {
    var oError = new Error("not found");
    oError.status = 404;
    next(oError);
});

// 500
app.use((err, req, res, next) => {
    res.json({
        errcode: err.status || 500,
        msg: err.toString()
    });
    next();
});


module.exports = app;