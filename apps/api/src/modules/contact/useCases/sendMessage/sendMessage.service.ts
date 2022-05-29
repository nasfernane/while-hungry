import { Injectable } from '@nestjs/common';
import * as nodemailer  from 'nodemailer';
import { ContactBody } from '../../interfaces/contactBody';

 
// utils
import { prisma } from '@wh/prisma-client';


@Injectable()
export class SendMessageService {
  async sendMessage(body: ContactBody) {
    return new Promise((resolve, reject) => {
      const {nickname, email, subject, message} = body;

      const transporter = nodemailer.createTransport({
        host: 'ssl0.ovh.net',
        port: 465,
        secure: true,
        auth: {
          user: process.env['OVH_EMAIL_AUTH_USER'],
          pass: process.env['OVH_EMAIL_AUTH_PW']
        }
      })

      const mailOptions = {
        from: `"<While Hungry>", "<${email}>"`,
        to: `<contact@whilehungry.com>`,
        subject: `<${subject}>`,
        html: 
          `<h2>
            Message de l'utilisateur ${nickname} (${email})
          </h2>
          <p style="font-size: 20px;">${message}</p>
          `
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log("error while sending email : " + err)
          resolve(false);
        } else {
          resolve(true);
        }
      })
    })
    
  }
}
