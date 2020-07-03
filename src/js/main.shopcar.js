require.config({
    paths: {
        jquery: './jquery.min',
        shopcar: './lib/shopcar',
        cookie: './cookie'
    }
});

require(['shopcar', 'cookie'], function(shopcar, cookie) {
    shopcar.render(function() {
        //全选  全不选功能
        $(".quanxuan").click(function() {
            $(".cbx").prop("checked", $(this).prop("checked"));
        });

        $(".danxuan").click(function() {
            if ($(".danxuan:checked").length == $(".danxuan").length) {
                $(".quanxuan").prop("checked", true);
            } else {
                $(".quanxuan").prop("checked", false);
            }
        });

        $('.cbx').on('click', function() {
            //声明变量 存放总价
            var zongjia = 0;
            //点击所有复选框 都会触发事件
            //选中所有当前处于选中状态的的复选框 的父元素的父元素 里面的 单项价格 遍历相加
            $('.danxuan:checked').each((index, elm) => {
                zongjia += (+$(elm).parent().parent().find('.totalprice').text());
            });
            //放入相应的地方
            $('.zongjia').text(zongjia)
        });
        $('.delete').on('click', function() {
            //获取删除标签上面的自定义属性data-id的属性值  也就是商品对应的id
            var iddd = this.dataset.id;

            //获取页面当前的cookie， 并筛选出除了此项以外的数据（数组形式）
            var shop = JSON.parse(cookie.get('shop'))
            shop = shop.filter(val => {
                    return val.id !== iddd
                })
                //将筛选结果转为json字符串并重新设置cookie
            shop = JSON.stringify(shop);
            cookie.set('shop', shop, 1)
                //刷新页面  由于购物车内的商品是用cookie内的id去数据库请求数据 渲染出来的  所以刷新即可实现删除
            location.reload()
        })
    });
})