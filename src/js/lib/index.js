let baseUrl = "http://localhost/meizu.com"; // 基础路径

let pic = "/src/img/index-img/phone-adv-img/"


define(['jquery', 'HappyImage', 'lazyload', 'cookie'], function($, HappyImage, lazyload, cookie) {
    return {
        //数据渲染
        render: function(callback) {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    // console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm);
                        // 此处要修改a标签的调准地址  并附加上该商品的id  ${elm.id}
                        temp += `<a href="http://localhost/meizu.com/src/html/details.html?id=${elm.id}">
                        <img src="${baseUrl}${pic}${elm.pic}" alt="">
                        <p>${elm.title}</p>
                        <i>${elm.detial}</i>
                        <em>￥</em><b>${elm.price}</b>
                        </a>`
                    });

                    $('#phone-line2').append(temp);
                }
            });
        },
        //轮播图
        slider: function() {
            $("#slider").HappyImage({
                effect: "slide",
                autoplay: 5000,
                arrow: false,
                duration: 300
            });
        },
        //懒加载
        lazyload: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        },
        //头部hover效果
        hover: function() {
            $('.headhover').on('mouseover', function() {
                let index = $('.headhover').index(this);
                $(this).removeClass('changeOpacity').siblings().addClass('changeOpacity');
            });
        },
        //修改右上角购物车数量显示
        carnum: function() {
            let coo = cookie.get('shop');
            if (coo) {
                coo = JSON.parse(coo)
                $('.carnum').html(coo.length)
            }
        }
    }

})