const nodemailer = require('nodemailer');

module.exports = async (userMail)=> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
//    port: 587,
//    secure: false, // true for 465, false for other ports
    auth: {
      user: "mittaldiwanshu885@gmail.com", // generated ethereal user
      pass: "diniwash" // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Diwanshu Mittal" <mittaldiwanshu885@gmail.com>', // sender address
    to: userMail, // list of receivers
    subject: "its working", // Subject line
    text: "Please click this link to verify", // plain text body
    html: `<a href='https://localhost:3000/check/${userMail}'>Link</a>`, // html body
  });

//  console.log("Message sent: %s", info.messageId);
//  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//
//  // Preview only available when sending through an Ethereal account
//  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
