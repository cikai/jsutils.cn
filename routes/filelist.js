var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = '明早遍历一下 /docs 文件夹下的文件，自动生成目录。';
});

module.exports = router;
