export default {
  pages: [
    'pages/index/index',
    'pages/interest/interest',
    'pages/shopping/shopping',
    'pages/cart/cart',
    'pages/mine/mine'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: "pages/index/index",
      iconPath: "img/home.jpg",
      text: "首页"
    },{
      pagePath: "pages/shopping/shopping",
      iconPath: "img/home.jpg",
      text: "商城"
    },{
      pagePath: "pages/cart/cart",
      iconPath: "img/home.jpg",
      text: "购物车"
    },{
      pagePath: "pages/mine/mine",  
      iconPath: "img/home.jpg",
      text: "我的"
    }]
  }
}