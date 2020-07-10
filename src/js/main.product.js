require.config({
    paths: {
        jquery: './jquery.min',
        product: './lib/product',
        lazyload: './jquery.lazyload',
        cookie: './cookie'
    },
    shim: {
        lazyload: ['jquery']
    }
});


// 使用模块 请求数据
require(['product', 'cookie'], function(product, cookie) {
    product.render(function(id, price) {
        $('.btndown').on('click', function() {
            if ($('.num').val() >= 2) {
                $('.num').val(+$('.num').val() - 1);
            }
        })
        $('.btnup').on('click', function() {
            $('.num').val(+$('.num').val() + 1);
        })

        $('.addcar').on('click', function() {
            let cooo = cookie.get('user');
            if (!cooo) {
                location.href = "http://localhost/meizu.com/src/html/login.html"
            } else {
                product.addItem(id, price, $('.num').val());
                $('.addcar').attr('href', 'http://localhost/meizu.com/src/html/shopcar.html')
                console.log(1);
            }
        })
    });
    product.lazyload();
    product.carnum();
});