var router = require('koa-router')();

router.get('/', async function (ctx, next) {

  ctx.state = {
    content: ""
  };
  ctx.response.type = 'text/html';
  await ctx.render('index', {
  });
});

module.exports = router;
