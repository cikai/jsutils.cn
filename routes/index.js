var router = require('koa-router')();
var fs = require("fs")
var markdown = require("markdown").markdown;

router.get('/', async function (ctx, next) {
  let md = fs.readFileSync("docs/index.md");
  let html = markdown.toHTML(md.toString());

  ctx.state = {
    content: html
  };
  ctx.response.type = 'text/html';
  await ctx.render('index', {
  });
});

module.exports = router;
