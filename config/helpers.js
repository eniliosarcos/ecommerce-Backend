let Mysqli = require('mysqli');

let conn = new Mysqli({
    host: 'localhost', // IP/域名
    post: 3306, //端口， 默认 3306
    user: 'root', //用户名
    passwd: '123456', //密码
    db: 'mega_shop' // 可指定数据库，也可以不指定 【可选】
  });

let db = conn.emit(false, '');

module.exports = {
    database: db
};