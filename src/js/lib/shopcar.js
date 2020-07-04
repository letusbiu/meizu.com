let baseUrl = "http://localhost/meizu.com"; // 基础路径

let pic = "/src/img/details-img/phone-adv-img/"

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function() {
            let shop = cookie.get('shop'); //   获取cookie数据

            if (shop) {
                shop = JSON.parse(shop);
                let idlist = shop.map(elm => elm.id).join();
                // console.log(idlist)
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/shop.php`,
                    data: {
                        idlist: idlist
                    },
                    dataType: "json",
                    success: function(res) {
                        // console.log(res);
                        let tempstr = '';

                        res.forEach(elm => {
                            // cookie中获取 于当前从数据库中遍历出的相同元素
                            let arr = shop.filter(val => val.id == elm.id);

                            // console.log(arr);

                            tempstr += `
                            <div class="msg-line2">
                                <div class="msg-wrap">
                                    <input type="checkbox" class="cbx danxuan">
                                    <dl class="msg-img">
                                        <dt><img src="${baseUrl}${pic}${elm.pic}" alt=""></dt>
                                        <dd>
                                            <i class="title">${elm.title}</i>
                                            <i class="detail">${elm.detial}</i>
                                        </dd>
                                    </dl>
                                </div>
                                <span class="price">￥${arr[0].price}</span>
                                <div class="btn-wrap">
                                    <button class="btndown">-</button>
                                    <input type="text" value="${arr[0].num}" class="num">
                                    <button class="btnup">+</button>
                                </div>
                               <span style="color:#e02b41">￥<span><span class="totalprice">${arr[0].price * arr[0].num}</span>
                                <span><a href="javascript:;" class="delete" data-id="${arr[0].id}">删除</a></span>
                            </div>
                            `;
                            // console.log(tempstr)
                        });
                        $('.msg-line1').after(tempstr);


                        // callback && callback();

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
                            let zongjia = 0;
                            //点击所有复选框 都会触发事件
                            //选中所有当前处于选中状态的的复选框 的父元素的父元素 里面的 单项价格 遍历相加
                            $('.danxuan:checked').each((index, elm) => {
                                zongjia += (+$(elm).parent().parent().find('.totalprice').text());
                            });
                            //放入相应的地方
                            $('.zongjia').text(zongjia)
                        });
                        //删除功能
                        $('.delete').on('click', function() {
                            //获取删除标签上面的自定义属性data-id的属性值  也就是商品对应的id
                            let iddd = this.dataset.id;

                            //获取页面当前的cookie， 并筛选出除了此项以外的数据（数组形式）
                            let shop = JSON.parse(cookie.get('shop'))
                            shop = shop.filter(val => {
                                    return val.id !== iddd
                                })
                                //将筛选结果转为json字符串并重新设置cookie
                            shop = JSON.stringify(shop);
                            cookie.set('shop', shop, 1)
                                //刷新页面  由于购物车内的商品是用cookie内的id去数据库请求数据 渲染出来的  所以刷新即可实现删除
                            location.reload()
                        });
                        //数量加减功能
                        $('.btndown').on('click', function() {
                            if ($(this).parent().parent().find('.num').val() > 1) {
                                $(this).parent().parent().find('.num').val(+$(this).parent().parent().find('.num').val() - 1);
                                //获取 加给右侧删除标签上面的自定义id
                                let idd = $(this).parent().parent().find('.delete')[0].dataset.id;
                                // console.log(idd)
                                let coo = cookie.get('shop');
                                // console.log(coo)
                                let newnum = +$(this).parent().parent().find('.num').val()
                                console.log(newnum)
                                coo = JSON.parse(coo)
                                coo.map(function(val) {
                                    idd == val.id ? val.num = newnum : null;
                                })
                                cookie.set('shop', JSON.stringify(coo), 1);
                                let jiaqian = +$(this).parent().parent().find('.price').html().slice(1);
                                console.log(jiaqian);

                                $(this).parent().parent().find('.totalprice').html(newnum * jiaqian)
                                let zongjia = 0;
                                //点击所有复选框 都会触发事件
                                //选中所有当前处于选中状态的的复选框 的父元素的父元素 里面的 单项价格 遍历相加
                                $('.danxuan:checked').each((index, elm) => {
                                    zongjia += (+$(elm).parent().parent().find('.totalprice').text());
                                });
                                //放入相应的地方
                                $('.zongjia').text(zongjia)
                            }
                        })

                        $('.btnup').on('click', function() {
                            //添加功能
                            $(this).parent().parent().find('.num').val(+$(this).parent().parent().find('.num').val() + 1);
                            //获取 加给右侧删除标签上面的自定义id
                            let idd = $(this).parent().parent().find('.delete')[0].dataset.id;
                            // console.log(idd)
                            let coo = cookie.get('shop');
                            // console.log(coo)
                            let newnum = +$(this).parent().parent().find('.num').val()
                            console.log(newnum)
                            coo = JSON.parse(coo)
                            coo.map(function(val) {
                                idd == val.id ? val.num = newnum : null;
                            })
                            cookie.set('shop', JSON.stringify(coo), 1);

                            let jiaqian = +$(this).parent().parent().find('.price').html().slice(1);
                            console.log(jiaqian);
                            $(this).parent().parent().find('.totalprice').html(newnum * jiaqian)


                            let zongjia = 0;
                            //点击所有复选框 都会触发事件
                            //选中所有当前处于选中状态的的复选框 的父元素的父元素 里面的 单项价格 遍历相加
                            $('.danxuan:checked').each((index, elm) => {
                                zongjia += (+$(elm).parent().parent().find('.totalprice').text());
                            });
                            //放入相应的地方
                            $('.zongjia').text(zongjia)

                        })

                    }
                });
            }


        }
    }
});