let baseUrl = "http://localhost/meizu.com"; // 基础路径

let pic = "/src/img/details-img/phone-adv-img/"

define(['jquery', 'lazyload', 'cookie'], function($, lazyload, cookie) {
    return {
        render: function(callback) {
            //从地址栏 获取主页传来的id
            let id = location.search.split("=")[1];
            // console.log(id);

            //发送请求  并发送id给后台php文件 php文件根据id查找相应的商品信息 并返回数据
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(elm) {
                    // console.log(elm);
                    // console.log(baseUrl + pic + elm.pic);

                    // //组装数据
                    let temp = `
                    <div id="phoneMsg">
                    <div id="phoneMsg-lf">
                        <img src="${baseUrl}${pic}${elm.pic}" alt="">

                        <ul>
                            <li><img src="../img/details-img/phoneMsg-img/phoneMsg-small-1.jpg" alt=""></li>
                            <li><img src="../img/details-img/phoneMsg-img/phoneMsg-small-2.jpg" alt=""></li>
                            <li><img src="../img/details-img/phoneMsg-img/phoneMsg-small-3.jpg" alt=""></li>
                            <li><img src="../img/details-img/phoneMsg-img/phoneMsg-small-4.jpg" alt=""></li>
                        </ul>

                        <p>
                            <a href="javascript:;">
                                <i class="iconfont icon-xingxing"></i>
                                <span>收藏</span>
                            </a>
                            <a href="javascript:;">
                                <i class="iconfont icon-duibi"></i>
                                <span>对比</span>
                            </a>
                        </p>
                    </div>

                    <div id="phoneMsg-rt">
                        <h2 class="title">${elm.title}</h2>
                        <p class="detial">${elm.detial}
                        </p>

                        <div class="property-sell">
                            <div class="property-sell-price">
                                <small>￥</small><span>${elm.price}.00</span>
                            </div>

                            <div class="property-sell-morebuy">
                                <i>加价购</i>
                                <em>另加29元起，即可换购超值商品</em>
                                <a href="jacascript:;">立即加购 ></a>
                            </div>
                        </div>

                        <div class="property-service">
                            <dl class="property-service-item">
                                <dt class="dtstyle">支持</dt>
                                <dd>
                                    <i class="iconfont icon-duihao"></i><span>花呗分期</span>
                                    <i class="iconfont icon-duihao"></i><span>顺丰发货</span>
                                    <i class="iconfont icon-duihao"></i><span>7天无理由退货（具体查看详情）</span>
                                </dd>
                            </dl>

                            <dl class="property-service-suda">
                                <dt class="dtstyle">配送服务</dt>
                                <dd>浙江省 杭州市
                                    <i></i>
                                </dd>
                            </dl>

                            <div class="after-sale">
                                本商品由 魅族 负责发货并提供售后服务&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-ziyuan"></i><a href="javascript:;">商城客服</a>
                            </div>
                        </div>
                        <!-- 型号 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">型号</dt>
                            <dd>
                                <a href="javascript:;" class="a-black p-type">魅族 17 Pro</a>
                                <a href="javascript:;" class="p-type">魅族 17</a>
                                <a href="javascript:;" class="p-type">魅族 16T</a>
                                <a href="javascript:;" class="p-type">魅族 17 航母限定版</a>
                            </dd>
                        </dl>
                        <!-- 网络类型 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">网络类型</dt>
                            <dd>
                                <a href="javascript:;" class="a-black p-type">全网通公开版</a>
                            </dd>
                        </dl>
                        <!-- 颜色分类 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">颜色分类</dt>
                            <dd>
                                <a href="javascript:;" class="p-type p-pic"><img src="../img/details-img/phoneMsg-img/phone-color-1.png" alt=""> 乌金</a>
                                <a href="javascript:;" class="p-type p-pic"><img src="../img/details-img/phoneMsg-img/phone-color-2.png" alt="">定白</a>
                                <a href="javascript:;" class="a-black p-type p-pic"><img src="../img/details-img/phoneMsg-img/phone-color-3.png" alt="">天青</a>
                            </dd>
                        </dl>
                        <!-- 内存容量 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">内存容量</dt>
                            <dd>
                                <a href="javascript:;" class="p-type">8+128GB</a>
                                <a href="javascript:;" class="a-black p-type">12+256GB</a>
                            </dd>
                        </dl>
                        <!-- 选择套餐 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">选择套餐</dt>
                            <dd>
                                <a href="javascript:;" class="a-black p-type">官方标配</a>
                                <a href="javascript:;" class="p-type">无线充套餐<span>省40元</span></a>
                                <a href="javascript:;" class="p-type">碎屏保套餐<span>省44元</span></a>
                            </dd>
                        </dl>
                        <!-- 花呗分期 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">花呗分期
                                <i class="iconfont icon-wenhao why"></i>
                            </dt>
                            <dd>
                                <a href="javascript:;" class="p-type instalment">¥1602.35×3期<em>含手续费 ￥36.02/期</em></a>
                                <a href="javascript:;" class="p-type instalment">¥818.40×6期<em>含手续费 ￥35.24/期</em></a>
                                <a href="javascript:;" class="p-type instalment">¥420.94×12期<em>含手续费 ￥29.36/期</em></a>
                            </dd>
                        </dl>
                        <!-- 数量 -->
                        <dl class="phone-type">
                            <dt class="dtstyle">数量</dt>
                            <dd class="product-num">
                                <button class="btndown" min="1">-</button>
                                <input type="text" value="1" class="num">
                                <button class="btnup">+</button>
                            </dd>
                        </dl>

                        <div class="buy-wrap">
                            <a href="javascript:;" class="buy-now">立即购买</a>
                            <a href="javascript:;" class="addcar">加入购物车</a>
                        </div>
                    </div>

                </div>`;

                    //将数据放入页面
                    $('#phoneMsg-wrap').append(temp);

                    // $('.sticky-name').innerhtml = `${elm.title}`;
                    $('#sticky-name').html(`${elm.title}`);
                    callback && callback(elm.id, elm.price);
                }

            });
        },
        //懒加载
        lazyload: function() {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            })
        },
        addItem: function(id, price, num) {
            // shop
            let shop = cookie.get('shop'); // 获取cookie中的购物车 
            // 获取是为了判断它是否存在
            // 不存在 创建
            // 存在 修改

            let product = {
                id: id,
                price: price,
                num: num
            }

            if (shop) { // 存在
                shop = JSON.parse(shop); // 将字符串转成数组
                // 数组中已经存在了商品的id
                // 只修改num只 而不是将商品放入数组
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 不存在新建数组
                shop.push(product); // 放入商品
            }

            cookie.set('shop', JSON.stringify(shop), 1);
        },
        //修改右上角购物车数量显示
        carnum: function() {
            let coo = cookie.get('shop');
            // let coo = cookie.get('shop');
            if (coo) {
                coo = JSON.parse(coo)
                $('.carnum').html(coo.length)
            }
        }
    }
});