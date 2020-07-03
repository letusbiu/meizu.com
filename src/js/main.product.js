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
require(['product'], function(product) {
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
            product.addItem(id, price, $('.num').val());
        })
    });
    product.lazyload();
});