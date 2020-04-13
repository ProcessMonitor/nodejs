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
        from: '"ProcessMonitor <zhang19970321@qq.com>"', // sender address
        to: mail, // list of receivers
        subject: "来自小张的验证邮件!", // Subject line
        text: `验证码为 : ${code}  如非本人操作请忽略.`, // plain text body
    }
    trans.sendMail(emailInfo, (err, data) => {
        console.log('data :' + data + 'err:' + err); // 
    });
}
module.exports = {
    sendcode
}