// app-core
const assert = require("assert");
const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');
const readDir = require("./tools/requireDir");
const { STATIC_DIRNAMES } = require("../config");
const app = Express();

// test
const {
    test: testInterface
} = readDir("../controllers");
const {
    test: testMiddleware
} = readDir("../middlewares");

{
    assert(Array.isArray(STATIC_DIRNAMES), "STATIC_PATH type must be array");
    for (const dirname of STATIC_DIRNAMES) {
        app.use(Express.static(dirname));
    }
}

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
morgan.format('diy', ':remote-addr - [:date[clf]] ":method :url" :status');
app.use(morgan('diy'));

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
