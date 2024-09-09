const express = require('express');
const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const app = express();
const port = 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

//app.use(express.static(path.join(__dirname, 'build')));


const transporter = nodemailer.createTransport({
    host: "0.0.0.0",
    port: 1025,
    secure: false,
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      }, 
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
      },
});

app.post('/maildev', (req, res) => {

    const mailInfos = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
        workerName: req.body.workerName,
        workerMail: req.body.workerMail
    }

    const source = fs.readFileSync('email_template.html', 'utf-8').toString(); // Define the template file
    const template = handlebars.compile(source); // Compile it to permit variables changes
    // So replacements to get dynamic infos
    const replacements = {
        name: mailInfos.name,
        email: mailInfos.email,
        subject: mailInfos.subject,
        message: mailInfos.message,
        workerName: mailInfos.workerName
    };
    const htmlToSend = template(replacements); // Build the template to use it in sendMail

    transporter.sendMail({
        from: mailInfos.email,
        to: mailInfos.workerMail,
        subject: mailInfos.subject,
        text: "Bonjour ${mailInfos.workerName}, {mailInfos.name}, {{mailInfos.email}}, mailInfos.message",
        html: htmlToSend,
    }, (err) => {
        if (err) {
            res.status(500);
        } else {
            res.status(200).send({sent: true});
        }
    });

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });