var router = require('koa-router')();
var fs = require('fs')
var path = require('path');

router.get('/', function (ctx, next) {
  let doc_path = path.join(__dirname, '../docs');
  let filelist = fs.readdirSync(doc_path);
  
  ctx.body = filelist;
});

module.exports = router;
