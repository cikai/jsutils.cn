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
  await ctx.render('docs', {
  });
});

router.get('/:file', async function (ctx, next) {
  let markdown_dir = "docs/";
  let file_name = decodeURI(ctx.url).split("/")[2];

  let md = fs.readFileSync(markdown_dir + file_name + ".md");
  let html = markdown.toHTML(md.toString());

  ctx.state = {
  	title: file_name,
    content: html
  };
  ctx.response.type = 'text/html';
  await ctx.render('docs', {
  });
});

module.exports = router;
