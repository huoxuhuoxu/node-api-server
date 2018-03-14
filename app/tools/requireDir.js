
const fs = require('fs');
const path = require('path');

/**
 *  @readme
 *      目前只能递归解构 .js 后缀的文件
 * 
 *  parserRule: 文件名提取规则
 *  reducerDirName: 递归文件函数
 * 
 */

const parserRule = /(.+)\.js$/;

const reducerDirName = (dirname) => {
    try{
        
        if (!fs.existsSync(dirname)) {
            throw new Error(`不存在文件夹: ${dirname}`);
        }
        let aFiles = fs.readdirSync(dirname);
        let obj = {};
        for (let v of aFiles) {
            let arr = v.match(parserRule);
            if (arr && arr.length){
                let fileVariable = arr[1];
                obj[fileVariable] = require(path.join(dirname, v));
            } else {
                console.log(`启用递归解析: %s`, v);
                obj[v] = reducerDirName(path.resolve(dirname, v));
                continue;
            }
        }
        return obj;

    } catch (err) {
        console.log(err.toString());
        console.log(`解构文件夹 ${dirname} 失败,请排查错误...`);
        return {};
    }
    
};

module.exports = (dirname) => {
    let sDirPath = path.join(__dirname, dirname);
    let obj = reducerDirName(sDirPath);
    console.log(`提取${dirname} 有效结果:`, obj);
    return obj;
    
};

