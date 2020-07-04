<?php
    // 注册的业务逻辑

    // 1. 连接数据库
    include('./conn.php');

    // 2. 接收前端发过来的数据
    // 3. 验证数据(用户名是否存在)
    // 4. 根据验证的结果进行下一步  
    //    用户名存在 提示用户  用户名已存在 跳转回注册页
    //    用户名不存在  将用户提交的数据 写入数据库

    // 2. 接收数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];


    // 3. 将用户传递过来的数据 写入数据库
    $insertUser = "insert into meizu(user_name,user_password)values('$username','$password')";
    // echo $insertUser;

    $res = $mysqli->query($insertUser);

    $mysqli->close();
    
    if($res){
        echo "注册成功";
        // echo '<script>location.href="http://localhost/meizu.com/src/html/login.html";</script>';
    }
    
?>