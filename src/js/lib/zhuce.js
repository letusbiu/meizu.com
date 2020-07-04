let baseUrl = "http://localhost/meizu.com"; // 基础路径
define(['jquery'], function($) {
    return {

        reg: function() {
            let reg5 = /^1[3-9]\d{9}$/;
            let reg6 = /^.{6,16}$/;

            $('.phonenum').on('input', function() {
                $('.remind1').html('请输入正确的手机号')

                if (reg5.test($(this).val())) {
                    $('.remind1').html('手机号格式正确')
                } else {
                    $('.remind1').html('请输入正确的手机号')
                };

                if ($(this).val() == "") {
                    $('.remind1').html("")
                }
            })



            $('.yanzheng').on('click', function() {
                let username = $('.phonenum').val();
                // console.log(username)
                // console.log(password)
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/zhuce1.php`,
                    data: { username: `${username}` },
                    success: function(res) {
                        console.log(res);
                        $('.remind3').html(res);
                        if (res == "用户名可用" && $('.remind1').html() == "手机号格式正确") {
                            $('.remind2').css('display', 'block')
                            $('.password').css('display', 'block')
                            $('.remind2').html('请设置密码')
                        }

                        $('#zhuce').on('change', function() {

                            if (reg6.test($('.password').val())) {
                                $('.remind2').html('密码格式正确')
                            } else {
                                $('.remind2').html('请输入6-16位密码')
                            };

                            if ($('.remind2').html() == '密码格式正确' && $('.remind1').html() == "手机号格式正确" && $('.remind3').html() == "用户名可用" && $('.xieyi input:checked').length == $('.xieyi input').length) {
                                $('#sub').removeAttr('disabled');
                            } else {
                                $('#sub').attr('disabled', 'true')
                            }

                        })
                    }
                });
            })


            $('#sub').on('click', function() {
                // console.log(1)
                let username = $('.phonenum').val();
                let password = $('.password').val();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/zhuce2.php`,
                    data: { username: `${username}`, password: `${password}` },
                    success: function(res) {
                        // console.log(res)
                        alert(res)
                        location.href = "http://localhost/meizu.com/src/html/login.html";
                    }
                });
            })
        }
    }
})