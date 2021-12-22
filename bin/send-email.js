#!/usr/bin/env node

/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, 2021.
 */

require('dotenv').config();

const fs = require('fs');
const nodemailer = require('nodemailer');

async function main () {
  const html = fs.readFileSync('', 'utf8');

  const mailConfig = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  };

  const mailData = {
    from: '',
    to: '',
    subject: 'EPFL Email Template - v0.0.1a1',
    html: html
  };

  const transporter = nodemailer.createTransport(mailConfig);
  const msg = await transporter.sendMail(mailData);
  console.log('Message sent: %s', msg.messageId);
}

main().catch(console.error);
