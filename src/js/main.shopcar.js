require.config({
    paths: {
        jquery: './jquery.min',
        shopcar: './lib/shopcar',
        cookie: './cookie'
    }
});

require(['shopcar', 'cookie'], function(shopcar, cookie) {
    shopcar.render();
})