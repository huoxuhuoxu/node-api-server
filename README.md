#### node-express 项目基础结构

##### install

    chmod u+x ./initial.sh
    ./initial.sh

##### using

    npm start

##### rely on

    nodejs v8.0.0

###### readme

    database.json: 数据库迁移库: db-migrate/db-migrate-mysql 配置文件
    .env: 环境配置库: dotenv 配置文件
    .initial.sh: 项目依赖安装
    index.js: 启动文件

    public: 静态资源目录
    migrations: 数据库文件目录

    app: 
        app.js: 主文件
        controllers: 控制器
        middlewares: 中间件
        services:   连接服务
            mysqlConnect.js: mysql连接初始化
            redisConnect.js: redis连接初始化
        tools: 工具
            requireDir.js: 提供引入文件夹,解构内部文件并输出的方法
        