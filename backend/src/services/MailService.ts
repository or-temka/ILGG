import nodemailer from 'nodemailer'

import { EMAIL_SMTP_PASSWORD } from '../PASSWORDS'
import {
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_USER,
  SITE_URL,
} from '../variables'

class MailService {
  transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: EMAIL_SMTP_HOST,
      port: EMAIL_SMTP_PORT,
      secure: true,
      auth: {
        user: EMAIL_SMTP_USER,
        pass: EMAIL_SMTP_PASSWORD,
      },
    })
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: EMAIL_SMTP_USER,
      to,
      subject: `Завершение регистрации на ${SITE_URL}`,
      text: '',
      html: `
        <div>
          <h1>Для завершения регистрации перейдите по ссылке:</h1>
          <a href="${link}">Подтвердить</a>
        </div>
      `,
    })
  }
}

export default new MailService()
