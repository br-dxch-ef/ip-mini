
/*Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var urn = e.detail.value.username;
    var pwd = e.detail.value.password;
    var loginreq = {
      username: urn,
      password: pwd
    }
    console.log('定义loginreq为：',loginreq);
    wx.request({
      url: 'http://localhost:8000/user/emailLogin',
      data: JSON.stringify(loginreq),
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        console.log(res.data);
        wx.redirectTo({
          url: '../patent/patent'
        });
      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
  },

  formReset: function () {
    console.log('form发生了reset事件');
  },

  bindtest: function () {

    wx.request({

      url: 'http://localhost:8080/Demo01/servlet02',

      data: {

        username: '001',

        password: 'abc'

      },

      method: 'GET',

      header: {

        'content-type': 'application/json' // 默认值

      },

      success: function (res) {

        console.log(res.data);

      },

      fail: function (res) {

        console.log(".....fail.....");

      }

    })

  }

})*/

var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'red',
    scrollTop: 100
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
