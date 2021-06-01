import Mock from 'mockjs'
Mock.mock("/home/nav", "get", require("./data/home_nav.json"));
Mock.mock("/shop/nav", "get", require("./data/shop.json"));