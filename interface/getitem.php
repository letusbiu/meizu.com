<?php

    //接收前端传来的id  再数据库查找对应的商品 并输出
    include('./conn.php');

    $id = $_REQUEST['id'];

    $sql = "select * from product where id='$id'";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;

    $mysqli->close();
?>