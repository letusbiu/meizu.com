require.config({
    paths: {
        jquery: './jquery.min',
        zhuce: './lib/zhuce',
    }
});


// 使用模块 请求数据
require(['zhuce'], function(zhuce) {
    // index.render();
    zhuce.reg();
});