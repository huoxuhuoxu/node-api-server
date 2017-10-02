// 默认使用了 select 0

const redis_keyname = process.env.REDIS_KEY_PREFIX || 'Demo';
var Redis = require('ioredis');
var redis;
if(process.env.REDIS_PASSWORD !== 'null'){
    redis = new Redis({
        'host': process.env.REDIS_HOST,
        'password': process.env.REDIS_PASSWORD
    });
}else{
    redis = new Redis({
        'host': process.env.REDIS_HOST
    });
}

let oCamouflageRedis = {};

for(let i in redis){
    oCamouflageRedis[i] = async function (){
        if(i === 'del'){
            let testReg = new RegExp(`^${redis_keyname}`);
            let aDelName = Array.prototype.map.call(arguments, (value) => {
                if(testReg.test(value)){
                    return value;
                }
                return `${redis_keyname}${value}`;
            });
            return await redis['del'](...aDelName);
        }
        let keyname = `${redis_keyname}${arguments[0]}`;
        return await redis[i](keyname, ...Array.prototype.slice.call(arguments, 1));
    };
}


module.exports = oCamouflageRedis;

