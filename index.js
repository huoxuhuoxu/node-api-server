// main
const http = require("http");
const { port } = require("./config");
const app = require("./app/app");

if (!module.parent) {

    const server = http.createServer(app);
    server.listen(port);

    process.env.realDirName = __dirname;

    console.log(`工作进程 ${process.pid} 已启动...`);
}


