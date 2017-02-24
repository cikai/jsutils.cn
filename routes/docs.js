var router = require('koa-router')();
var fs = require("fs")
var markdown = require("markdown").markdown;

router.get('/:file', async function (ctx, next) {
  var markdown_dir = "docs/";
  var file_name = ctx.url.split("/")[2];

  var md = fs.readFileSync(markdown_dir + file_name + ".md");
  var html = markdown.toHTML(md.toString());

  ctx.state = {
  	title: file_name,
    content: html
  };
  ctx.response.type = 'text/html';
  await ctx.render('index', {
  });
});

module.exports = router;
