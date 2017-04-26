<?php
/*
    实现用户登录
    请求参数：
    uname：用户名
    upwd：密码

    输出结果：
    {"code":1,uname:"",upwd:""}
    or：
    {"code":400}
*/
/*获取前端提交的参数*/
@$uname=$_REQUEST['uname'] or die('uname required');
@$upwd=$_REQUEST['upwd'] or die('upwd required');

require('init.php');

/*去数据库中查询*/
$sql="SELECT uid,uname FROM uq_user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row){
    $output['code']=1;
    $output['userId']=intval($row['userId']);
    $output['phone']=$row['phone'];
    $output['nickname']=$row['nickname'];
}else{
    $output['code']=400;
}

/*返回响应*/
echo json_encode($output);
