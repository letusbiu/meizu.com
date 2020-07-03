require.config({
    paths: {
        jquery: './jquery.min',
        product: './lib/product',
        lazyload: './jquery.lazyload'
    },
    shim: {
        lazyload: ['jquery']
    }
});


// 使用模块 请求数据
require(['product'], function(product) {
    product.render();
    product.lazyload();
    product.btndown();
    product.btnup();
});