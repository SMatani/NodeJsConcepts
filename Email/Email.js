var nodemailer=require('nodemailer');

var send_service= nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:'sender@mail.com',
        password:'password'
    }
});

send_service.sendMail(mailOptions,function(error,info){
    if(error){
        console.log("Mail not sent. Try again later !");
    }else{
        console.log("Email sent"+info);
    }
});

var mailOptions={
    from:"sender@mail.com",
    to:"receiver@mail.com",
    subject:"SEE SEE SEE",
    text:"Hey, I mailed you via node js code"
}