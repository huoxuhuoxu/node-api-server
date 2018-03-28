/**
 *  @readme
 *      单机多核集群
 * 
 */

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (!module.parent) {

    console.log(`主进程 ${process.pid} 运行中`);
    console.log(`工作进程数: ${numCPUs}`);

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


