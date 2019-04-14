const path = require('path')
const send = require('koa-send')
const Router = require('koa-router')
const rootRouter = new Router()
const staticRouter = new Router()

rootRouter.get('/js/:resource', async (ctx, next) => {
    console.log('[]ctx.path] => ', ctx.path)
    await send(ctx, ctx.path, { root: path.resolve(__dirname, '../static') });
})

rootRouter.get('/', async (ctx, next) => {
    // ctx.router available
    await send(ctx, 'index.html', { root: path.resolve(__dirname, '../static') });
    // ctx.body = 'hehe'
});

rootRouter.get('/:page', async (ctx, next) => {
    // ctx.router available
    await send(ctx, 'index.html', { root: path.resolve(__dirname, '../static') });
    // ctx.body = 'hehe'
});

module.exports = rootRouter