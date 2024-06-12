import nodemailer from 'nodemailer'

import { EMAIL_SMTP_PASSWORD } from '../PASSWORDS'
import {
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_USER,
  SITE_URL,
} from '../variables'
import mailConfirmation from './mails/mailConfirmation'

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
      html: mailConfirmation(link),
    })
  }
}

export default new MailService()
