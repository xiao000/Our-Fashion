<?php
header('Content-Type: text/html;charset=UTF-8');
?>

<!--header-->
<div class="other_header">
  <div class="container">
    <!--导航条-->
    <div class="navbar navbar-default">
      <div class="container">
        <!--导航条头部 = 品牌 + 汉堡包-->
        <div class="navbar-header">
          <a class="navbar-brand" href="#"></a>
          <a class="navbar-toggle" href="#menu" data-toggle="collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
        </div>
        <!--导航条折叠部分-->
        <div id="menu" class="collapse navbar-collapse">
          <!--折叠部分左侧的导航菜单-->
          <ul class="nav navbar-nav">
            <li><a href="#" class="active">首页</a></li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">女装<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">上衣</a></li>
                <li class="divider"></li>
                <li><a href="#">裙子</a></li>
                <li class="divider"></li>
                <li><a href="#">裤子</a></li>
                <li class="divider"></li>
                <li><a href="#">鞋子</a></li>
                <li class="divider"></li>
                <li><a href="#">包包</a></li>
                <li class="divider"></li>
                <li><a href="#">配饰</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">男装<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">应季潮品</a></li>
                <li class="divider"></li>
                <li><a href="#">上衣</a></li>
                <li class="divider"></li>
                <li><a href="#">下装</a></li>
                <li class="divider"></li>
                <li><a href="#">鞋包</a></li>
                <li class="divider"></li>
                <li><a href="#">配饰</a></li>
              </ul>
            </li>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">最新消息</a></li>
          </ul>
          <!--折叠部分右侧的导航菜单-->
          <ul class="nav navbar-nav navbar-right">
            <li><a href="index.html">欢迎来到我们的时尚</a></li>
            <li id="shopping">
              <a href="car.html">购物车:<span class="glyphicon glyphicon-shopping-cart text-danger"></span><span class="badge">1</span></a>
            </li>
          </ul>
          <!--折叠部分的表单-->
          <form class="navbar-form navbar-right">
            <div class="form-group has-feedback">
              <label class="sr-only" for="kw">搜索关键字：</label>
              <input class="form-control" id="kw" placeholder="产品搜索">
              <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
          </form>
          <!--折叠部分的文本-->
          <span class="navbar-text navbar-right">|</span>
          <!--折叠部分的超链接-->
          <a class="navbar-link navbar-text navbar-right" href="#">产品搜索</a>
        </div>
      </div>
    </div>
    <div class="header_text_lg">
    <h1>时尚就是属于你的</h1>
    <h3>无需再等，及时掌握</h3>
    </div>
  </div>
</div>
