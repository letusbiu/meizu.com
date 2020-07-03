let baseUrl = "http://localhost/meizu.com"; // 基础路径

let pic = "/src/img/details-img/phone-adv-img/"

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
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


                        callback && callback();

                    }


                });
            }
        }
    }
});