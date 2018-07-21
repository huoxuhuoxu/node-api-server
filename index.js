// main
const http = require("http");
const { PORT } = require("./config");
const app = require("./app/app");

if (!module.parent) {

    const server = http.createServer(app);
    server.listen(PORT);

    server.on("listening", () => {
        console.log(`工作进程 ${process.pid} 已启动, 监听端口号 ${PORT}...`);
    });

    server.on("error", (err) => {
        if (err.syscall !== "listen") throw err;

        switch (err.code) {
            case 'EACCES':
                console.error(PORT + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(PORT + ' is already in use');
                process.exit(1);
                break;
            default:
                throw err;
        }
        
    });

    process.on("uncaughtException", (msg) => {
        console.log("[warning] uncaughtException: %s", msg);
    });

    process.on("unhandledRejection", (rejected) => {
        console.log("[warning] unhandledRejection: %s", rejected);
    });

    // ...

}


