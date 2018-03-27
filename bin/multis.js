/**
 *  @readme
 *      单机多核集群
 * 
 *  @todo
 *      传递参数需要继承运行环境的
 * 
 */

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const { port } = require("../config");

if (!module.parent) {

    console.log(`主进程 ${process.pid} 运行中`);
    console.log(`工作进程数: ${numCPUs} \r\n监听端口号: ${port}`);

    cluster.setupMaster({
        exec: "index.js"
    });

    for (let i=0; i<numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
        cluster.fork();
    });

}


