
Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var IP_id = e.detail.value.IP_id;
    console.log('定义IP_id为：', IP_id);
    wx.request({
      url: 'http://localhost:8000/Patent/searchPatentByID',
      data: {
        patentID: IP_id
      },
      method: 'POST',
      dataType: 'json',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function (res) {
        console.log(res.data);
        //console.log("success...");
        //将专利信息显示在页面上

      },
      fail: function (res) {
        console.log("...fail...");
      }
    })
  },

  formReset: function () {
    console.log('form发生了reset事件');
  }
})