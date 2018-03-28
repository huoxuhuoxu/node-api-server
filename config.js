/**
 *  @readme 
 *      全局配置文件
 * 
 *      env:
 *          proDirName: 项目根目录
 *  
 *      exports:
 *          PORT: 监听端口号
 *          STATIC_DIRNAMES: 静态目录的完整路径数组
 *      
 *      local:
 *          __static_dirnames: 配置需要公开的目录
 * 
 */

require('dotenv').config();
const path = require("path");

// env
process.env.proDirName = __dirname;

// local
const __static_dirnames = [ "public" ];

// exports
const config = {
    PORT: process.env.PORT || 3000,
    STATIC_DIRNAMES: __static_dirnames.map(v => path.resolve(__dirname, v))
};
 

module.exports = config;
