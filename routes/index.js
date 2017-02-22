var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'tiny book 迷你小书'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
