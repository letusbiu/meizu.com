require.config({
    paths: {
        jquery: './jquery.min',
        login: './lib/login',
        cookie: './cookie'
    }
});


// 使用模块 请求数据
require(['login'], function(login) {
    // index.render();
    login.reg();
    login.tabs();
});