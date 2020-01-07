//index.js
//获取应用实例
/* const app = getApp() */
const QRCode  = require("../../utils/qrcode.js");
Page({
    data() {
        return {
            
        }
    },
    onLoad:function(){
        var code = new QRCode('qr',{
            text: 'http://www.baidu.com',
            width: 666,
            height:666,
            /* padding: 12, */ // 生成二维码四周自动留边宽度，不传入默认为0
            correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
            callback: (res) => {
             console.log(res.path)
             // 接下来就可以直接调用微信小程序的api保存到本地或者将这张二维码直接画在海报上面去，看各自需求
            }
           })
           console.log(code)
    }
})
