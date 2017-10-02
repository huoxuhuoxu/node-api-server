
const fs = require('fs');
const path = require('path');

module.exports = (dirname) => {
    let sDirPath = path.join(__dirname, dirname);
    try{
        if(!fs.existsSync(sDirPath)){
            console.log(sDirPath);
            throw new Error('不存在文件夹');
        }
        let aFiles = fs.readdirSync(sDirPath);
        let obj = {};
        let reg = /(.+)\.js$/;
        for(let v of aFiles){
            let arr = v.match(reg);
            let fileVariable = arr[1];
            obj[fileVariable] = require(path.join(sDirPath, v));
        }
        return obj;
    }catch(err){
        console.log(err.toString());
        console.log(`解构文件夹 ${sDirPath} 失败,请排查错误...`);
        return {};
    }
};

