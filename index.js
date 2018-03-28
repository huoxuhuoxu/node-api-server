// main
const http = require("http");
const { PORT } = require("./config");
const app = require("./app/app");

if (!module.parent) {

    const server = http.createServer(app);
    server.listen(PORT);

    console.log(`工作进程 ${process.pid} 已启动, 监听端口号 ${PORT}...`);
}


