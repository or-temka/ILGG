import nodemailer from 'nodemailer'

import { EMAIL_SMTP_PASSWORD } from '../PASSWORDS'
import {
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_USER,
  SITE_URL,
} from '../variables'
import mailConfirmationViaCode from './mails/mailConfirmationViaCode'
import mailConfirmationViaLink from './mails/mailConfirmationViaLink'
import mailRecoveryViaCode from './mails/mailRecoveryViaCode'

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

  async sendActivationMailLink(to: string, link: string) {
    await this.transporter.sendMail({
      from: EMAIL_SMTP_USER,
      to,
      subject: `Завершение регистрации на ${SITE_URL}`,
      text: '',
      html: mailConfirmationViaLink(link),
    })
  }

  async sendActivationMailCode(to: string, activationCode: string) {
    await this.transporter.sendMail({
      from: EMAIL_SMTP_USER,
      to,
      subject: `Завершение регистрации на ${SITE_URL}`,
      text: '',
      html: mailConfirmationViaCode(activationCode),
    })
  }

  async sendRecoveryMailCode(to: string, activationCode: string) {
    await this.transporter.sendMail({
      from: EMAIL_SMTP_USER,
      to,
      subject: `Восстановление пароля на сайте ${SITE_URL}`,
      text: '',
      html: mailRecoveryViaCode(activationCode),
    })
  }
}

export default new MailService()
