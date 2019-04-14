const Koa = require('koa');
const router = require('./router')

const app = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes())

app.listen(3000);