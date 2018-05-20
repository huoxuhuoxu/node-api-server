#### nodeJs 基于 Express 项目基础结构

##### install

    1.通过命令行工具生成项目:
        sudo npm install express-structure-app -g
        express-structure-app [project-name]
        进入项目后执行 npm install

    2.git clone: 克隆项目
    

##### using

    npm start: 单进程运行模式
    npm run multis: 单机多核集群模式
    npm run dev: 开发模式, 基于nodemon
    npm run pro: 生产模式, 基于pm2

##### rely on

    nodejs v8.0.0

###### readme

    database.json: 数据库迁移库: db-migrate/db-migrate-mysql 配置文件
    .env: 环境配置库: dotenv 配置文件
        REDIS_KEY_PREFIX: redis中key的前缀,由redisConnect.js中自动封装进去
        PORT: 端口号
    index.js: 启动文件
    config.js: 项目配置文件
        PORT: 默认端口号 3000
        STATIC_DIRNAMES: 默认静态资源目录组 [ "public" ]

    public: 静态资源目录
    migrations: 数据表结构目录, 用于迁移

    monitor: 管理监控 
        multis.js: 集群启动入口

    app: 
        app.js: 主文件
        controllers: 控制器
        middlewares: 中间件
        services:   连接服务
            mysqlConnect.js: mysql连接初始化
            redisConnect.js: redis连接初始化
        tools: 工具
            requireDir.js: 提供引入文件夹,解构内部文件并输出的方法

    env:
        proDirName: 项目根目录


##### 注
    node-data-format-unification: 如果需要上传文件, 请去掉此中间件

##### url
> 命令行工具: 构建Node.js-express项目 [express-structure-app](https://github.com/huoxuhuoxu/express-structure-app)  
> 数据迁移 [db-migrate](https://db-migrate.readthedocs.io/en/latest/API/SQL/)   
> 环境变量 [dotenv](https://github.com/motdotla/dotenv)         
