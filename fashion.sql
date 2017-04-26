SET NAMES UTF8;
DROP DATABASE IF EXISTS ss;
CREATE DATABASE ss CHARSET=UTF8;
USE ss;

/**用户表**/
CREATE TABLE user(
    userId INT PRIMARY KEY AUTO_INCREMENT, /*用户编号*/
    phone VARCHAR(11),                 	/*电话*/
    upwd VARCHAR(32),	               	/*密码*/
    nickname VARCHAR(32) NOT NULL DEFAULT '',	  /*昵称*/
    sex	VARCHAR(1) NOT NULL DEFAULT '',		  /*性别，M-男，F-女, DEFAULT 'M'*/
    age	VARCHAR(3) NOT NULL DEFAULT '',		  /*年龄*/
    edu	VARCHAR(16) NOT NULL DEFAULT '',	      /*学历*/
    job	VARCHAR(16) NOT NULL DEFAULT ''	      /*职业*/
);
INSERT INTO user VALUES
(1, '13501234567', '123456','韩小米','','','',''),
(2, '13812345678', '123456','','','','','');
/**产品信息表**/
CREATE TABLE ss_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,  
  pname VARCHAR(64),  
  ptype VARCHAR(64),
  price FLOAT(8,2),  
  pic VARCHAR(32)
);
INSERT INTO jd_product VALUES
(1,'我们的时尚',998650,3660.00,'img/ab1.jpg'),
(2,'我们的时尚',998651,1490.00,'img/ab2.jpg'),
(3,'我们的时尚',998653,9590.00,'img/ab3.jpg'),
(4,'我们的时尚',998654,3990.00,'img/ab4.jpg'),
(5,'我们的时尚',998655,2990.00,'img/ab5.jpg'),
(6,'我们的时尚',998656,1560.00,'img/ab6.jpg'),
(7,'我们的时尚',998657,5960.00,'img/ab7.jpg'),
(8,'我们的时尚',998658,3990.00,'img/ab8.jpg'),
(9,'我们的时尚',998659,4990.00,'img/bs1.jpg'),
(10,'我们的时尚',998660,2990.00,'img/bs2.jpg'),
(11,'我们的时尚',998661,1990.00,'img/bs3.jpg'),
(12,'我们的时尚',998662,1910.00,'img/bs4.jpg'),
(13,'我们的时尚',998663,3190.00,'img/bs5.jpg'),
(14,'我们的时尚',998664,3150.00,'img/bs6.jpg')

/**购物车表**/
CREATE TABLE ss_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,  
  userId INT
);
INSERT INTO ss_cart VALUES
(100, 10);

/**购物车详情表**/
CREATE TABLE ss_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,  
  cartId INT,
  productId INT,  
  count INT
);
INSERT INTO ss_cart_detail VALUES
(NULL, 100, 8, 2),
(NULL, 100, 15, 1),
(NULL, 100, 27, 3);

/*个人收藏*/
CREATE TABLE favorite(
    fid INT PRIMARY KEY AUTO_INCREMENT,/*收藏记录id*/
    userId INT,         /*用户id*/
    zfId INT,       /*房源id*/
    fTime VARCHAR(16)   /*收藏时间*/
);
