const sender = require('nodemailer');

var trans = sender.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'zhang19970321@qq.com', // generated ethereal user
        pass: 'rozeweniafcxbchg' // generated ethereal password
    }
})

function sendcode(mail, code) {
    let emailInfo = {
        from: '"Steam Account <zhang19970321@qq.com>"', // sender address
        to: mail, // list of receivers
        subject: "来自张的验证邮件!", // Subject line
        text: `你正在被我当做工具人测试验证码 no bb kiss me, 验证码为 : ${code}, 如非本人操作请忽略 , 有效时间为五分钟.`, // plain text body
    }
    trans.sendMail(emailInfo, (err, data) => {
        console.log('data :' + data + 'err:' + err); // 
    });
}
module.exports = {
    sendcode
}