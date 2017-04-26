
/**功能点3：页面加载完后，异步请求当前登录用户购物车中的商品**/
$.ajax({
  url: 'data/cart_detail_list.php',
  success: function(data){
    var html = '';
    $.each(data, function(i, p){
      html += `
      <div class="row car_content">
        <div class="col-sm-2 col-sm-offset-1">
          <a href="single.html">
            <img src="${p.pic}" class="media-object"/>
          </a>
        </div>
        <div class="col-sm-4 car_border">
          <h4>${p.pname}</h4>
          <h5>型号：${p.ptype}</h5>
          <p>价格：<h3>￥${p.price}</h3></p>
          <label for="num">数量</label>
          <input type="number" value="${p.count}" id="num"/>
        </div>
        <div class="col-sm-3 col-sm-offset-1 ">
          <a class="car_close"><img src="img/close.png"/></a>
          <h5>总计：￥${p.price*p.count}</h5>
          <h5>优惠：￥00.00</h5>
          <p>邮费：￥00.00</p>
          <p>交付时间在2~3个工作日</p>
          <a href="${p.did}">删除</a>
        </div>
      </div>
      `;
    });
    $('#cart').html(html);
  },
  error: function(){
    alert('购物车数据加载失败！请检查响应消息！');
  }
});


/**功能点4：为“删除”按钮绑定事件监听，实现购买详情的删除**/
$('#cart').on('click', 'a:contains("删除")', function(e){
  e.preventDefault();
  var did = $(this).attr('href');
  var that = this;  //使用临时变量指向当前被点击的A
  $.ajax({
    type: 'POST',
    url: 'data/cart_detail_delete.php',
    data: {'did': did},
    success: function(data){
      if(data.code<0){
        alert('响应成功但删除失败！原因：'+data.msg);
      }else {
        alert('购买记录删除成功！');
        //必须手工从table中删除当前tr！
        //console.log(this); //$.ajax中的this指向请求对象
        $(that).parent().parent().remove();

      }
    },
    error: function(){
      alert('购买记录删除失败！请检查响应消息！');
    }
  })
})