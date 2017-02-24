var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'tiny book 迷你小书',
    content: "github @ <a href='https://github.com/cikai/tiny-book' target='_blank'>cikai/tiny-book</a>"
  };

  await ctx.render('index', {
  });
})
module.exports = router;
