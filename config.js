/**
 *  @readme
 *      全局配置文件
 * 
 */

require('dotenv').config();
const port = process.env.PORT || 3000;

const config = {
    port
};
 

module.exports = config;
