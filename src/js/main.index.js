require.config({
    paths: {
        jquery: './jquery.min',
        index: './lib/index',
        HappyImage: './HappyImage.min',
        lazyload: './jquery.lazyload',
        cookie: './cookie'
    },
    shim: {
        HappyImage: ['jquery'],
        lazyload: ['jquery']
    }
});


// 使用模块 请求数据
require(['index'], function(index) {
    index.render();
    index.slider();
    index.lazyload();
    index.hover();
    index.carnum()
});