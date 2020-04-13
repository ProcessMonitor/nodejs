"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({ // ./nodemailer/lib/well-known/services.json查看
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'zhang19970321@qq.com', // generated ethereal user
        pass: 'rozeweniafcxbchg' // generated ethereal password
    }
});
// your email details
let mailInnerObj = {
    from: '"test" <zhang19970321@qq.com>', // sender address
    to: "zhang19970321@126.com", // list of receivers
    subject: "我再也不调戏setInterval了", // Subject line
    text: "笑不出来", // plain text body
    // html: "<b>嘻嘻</b>" // html body
}
// sendemail
transporter.sendMail(mailInnerObj);
//--- 搞事情----
// console.log("Message sent: %s", info.messageId);
// // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // Preview only available when sending through an Ethereal account
// console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);




// 任务 : 自己封装一个 sendmail