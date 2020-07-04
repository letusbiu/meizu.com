let baseUrl = "http://localhost/meizu.com"; // 基础路径
define(['jquery', 'cookie'], function($, cookie) {
    return {
        reg: function() {

            let coo = cookie.get('user');
            if (coo) {
                coo = JSON.parse(coo);
                $('.username').val(coo.username)
                $('.password').val(coo.password)
                $('#remember').prop('checked', true)
            }



            $('.login').on('click', function() {
                let username = $('.username').val();
                let password = $('.password').val();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/login.php`,
                    data: { username: `${username}`, password: `${password}` },
                    success: function(res) {
                        if (res == "登陆成功") {
                            $('.btn').css('opacity', 1);
                            // $('.btn').val('登录成功，2秒后跳转...');
                            // setTimeout(function() {
                            //     
                            // }, 2000);

                            let a = 3;
                            $('.btn').val(`登录成功，${a}秒后跳转...`)
                            a--;
                            let timer = setInterval(function() {
                                $('.btn').val(`登录成功，${a}秒后跳转...`)
                                a--;
                                if (a == 0) {
                                    clearInterval(timer);
                                    location.href = "http://localhost/meizu.com/src/html/index.html";
                                };
                            }, 1000)


                            if ($('.remember').prop('checked') == true) {
                                let user = {
                                    username: username,
                                    password: password
                                }
                                cookie.set('user', JSON.stringify(user), 1);
                            }
                        } else {
                            $('.btn').val(res)
                        }
                    }
                });
            })
        },
        //选项卡
        tabs: function() {
            $('#tabs>ul>li').on('click', function() {
                let index = $('#tabs>ul>li').index(this);
                $(this).addClass('actived').siblings().removeClass('actived');
                $('#tabs>div').eq(index).addClass('show').siblings().removeClass('show');
            });
        }
    }
})