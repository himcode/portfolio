const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
//     pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD'
//   }
// });


// EXPRESS SPECIFIC STUFF
app.use('/src', express.static('src')) // For serving static files
// app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'Home'}
    // res.status(200).render('home.pug');
    res.sendFile(path.join(__dirname+'/views/index.html'));
    // console.log(params.title);
})

app.post('/', (req, res)=>{
    name = req.body.fname.concat(" ", req.body.lname) 
    ques = req.body.query
    console.log(req.body)
    console.log(name+" "+ ques)
    res.sendFile(path.join(__dirname+'/views/thank.html'));

    //mail
//     const info = transporter.sendMail({
//         from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         to: "bar@example.com, baz@example.com", // list of receivers
//         subject: "Hello ✔", // Subject line
//         text: req.body, // plain text body
//       });
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});