var router = require('koa-router')();
var fs = require("fs")
var markdown = require("markdown").markdown;

router.get('/', async function (ctx, next) {
  var markdown_dir = "docs/";
  var file_name = "server-config.md";

  var md = fs.readFileSync(markdown_dir + file_name);
  var html = markdown.toHTML(md.toString());

  ctx.state = {
  	title: "server-config",
    content: html
  };
  ctx.response.type = 'text/html';
  await ctx.render('index', {
  });
});

module.exports = router;
