var router = require('koa-router')();
var os = require('os');

router.get('/', function (ctx, next) {
  let row = "\n\n";
  let osinfo = ('CPU: ' + JSON.stringify(os.cpus(), null, 2)) + row 
    + ('Network: ' + JSON.stringify(os.networkInterfaces(), null, 2)) + row 
    + ('Total memory: ' + os.totalmem()) + row 
    + ('Free memory: ' + os.freemem()) + row 
    + ('Hostname: ' + os.hostname()) + row 
    + ('Platform: ' + os.platform()) + row 
    + ('Temp dir: ' + os.tmpdir()) + row 
    + ('OS type: ' + os.type()) + row 
    + ('Uptime: ' + os.uptime());
  ctx.body = osinfo;
});

module.exports = router;
