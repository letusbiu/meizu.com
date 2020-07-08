require.config({
    paths: {
        jquery: './jquery.min',
        shopcar: './lib/shopcar',
        cookie: './cookie'
    }
});

require(['shopcar'], function(shopcar) {
    shopcar.render(function() {
        //将所有复选框全设置成checked状态
        $('.cbx').prop('checked', true);
        //修改总价
        let zongjia = 0;
        $('.danxuan:checked').each((index, elm) => {
            zongjia += (+$(elm).parent().parent().find('.totalprice').text());
        });
        //放入相应的地方
        $('.zongjia').text(zongjia)
    });
})